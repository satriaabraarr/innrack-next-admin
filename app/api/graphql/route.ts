import { NextRequest, NextResponse } from "next/server";
import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setAuthCookies } from "@/lib/auth/index";
import { isTokenExpiringSoon } from "@/lib/auth/token";
import { fetchRefreshToken } from "@/lib/auth/token";
import { cookies } from "next/headers";
import { extractTenantId } from "@/lib/jwt-utils";

function createApolloClient(token?: string) {
  console.log("create apollo client with token: ", token);
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/gl`,
      fetch: (uri, options) =>
        fetch(uri, {
          ...options,
          credentials: "include",
        }),
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
            "x-header-inn-code": "innsight",
          }
        : {
            "x-header-inn-code": "innsight",
          },
    }),
    cache: new InMemoryCache(),
  });
}

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "https://innsight.dare5.id");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-header-inn-code"
  );
  res.headers.set("Access-Control-Allow-Credentials", "true");
  return res;
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("inn_access_token")?.value;
  const refreshToken = cookieStore.get("inn_refresh_token")?.value;
  const tokenRefreshed = req.headers.get("x-token-refreshed") === "true";

  const { query, variables } = await req.json();
  if (typeof query !== "string" || !query.trim()) {
    return NextResponse.json(
      { error: "Invalid GraphQL query" },
      { status: 400 }
    );
  }

  let tokenToUse = accessToken;
  const tenantId = accessToken ? extractTenantId(accessToken) : null;
  let refreshedCookiesNeeded = false;

  if (
    !tokenRefreshed &&
    isTokenExpiringSoon(accessToken ?? "") &&
    refreshToken &&
    tenantId
  ) {
    console.log("harusnya refresh dulu dengan refreshToken: ", refreshToken);
    const refreshed = await fetchRefreshToken(
      refreshToken,
      tenantId,
      tokenToUse
    );
    if (refreshed?.accessToken && refreshed?.refreshToken) {
      tokenToUse = refreshed.accessToken;
      refreshedCookiesNeeded = true;
      console.info(
        `[GraphQL Refresh] tenant=${tenantId} at ${new Date().toISOString()}`
      );
    } else {
      return NextResponse.json({ error: "Refresh failed" }, { status: 401 });
    }
  }

  const client = createApolloClient(tokenToUse);
  const parsedQuery = gql`
    ${query}
  `;
  const isMutation = query.trim().startsWith("mutation");

  try {
    const result = isMutation
      ? await client.mutate({ mutation: parsedQuery, variables })
      : await client.query({ query: parsedQuery, variables });

    const jsonResponse = NextResponse.json(result, { status: 200 });
    jsonResponse.headers.set(
      "Access-Control-Allow-Origin",
      "https://innsight.dare5.id"
    );
    jsonResponse.headers.set("Access-Control-Allow-Credentials", "true");

    return refreshedCookiesNeeded
      ? setAuthCookies(jsonResponse, tokenToUse!, refreshToken!)
      : jsonResponse;
  } catch (err) {
    console.error("[GraphQL Proxy] Error:", err);
    return NextResponse.json(
      { error: "Failed to proxy GraphQL request" },
      { status: 500 }
    );
  }
}

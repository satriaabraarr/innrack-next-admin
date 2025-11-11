import { TokenPayload } from "@/types/token-payload";
import { jwtDecode } from "jwt-decode";

export function isTokenExpiringSoon(
  token: string,
  thresholdSeconds = 60
): boolean {
  let result: boolean;
  try {
    const { exp } = jwtDecode<TokenPayload>(token);
    // tampilkan dalam format lokal
    console.log("expired token", new Date(exp! * 1000).toLocaleString());
    const now = Math.floor(Date.now() / 1000);
    result = exp ? exp - now < thresholdSeconds : false;
    console.log("result isExpiringSoon ", result);
    return result;
  } catch {
    return true;
  }
}

export async function fetchRefreshToken(
  refreshToken: string,
  tenantId: string,
  tokenToRefresh?: string
) {
  const query = `
    mutation {
      refreshToken(input: {
        request: {
          refreshToken: "${refreshToken}",
          tenantId: "${tenantId}"
        }
      }) {
        verifyMeResponse {
          accessToken
          refreshToken
          tenantId
        }
      }
    }
  `;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/gl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-header-inn-code": "innsight",
      Authorization: `Bearer ${tokenToRefresh}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json?.data?.refreshToken?.verifyMeResponse;
}

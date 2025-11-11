import { NextResponse } from "next/server";

export function setAuthCookies(
  response: NextResponse,
  accessToken: string,
  refreshToken: string
): NextResponse {
  response.cookies.set("inn_access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  response.cookies.set("inn_refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  response.headers.set("Access-Control-Allow-Origin", "https://localhost:3443");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}

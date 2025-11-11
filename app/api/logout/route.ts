import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("inn_access_token");
  cookieStore.delete("inn_refresh_token");
  const response = NextResponse.json({ success: true });
  return response;
}

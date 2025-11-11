import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import type { TokenPayload } from "@/types/token-payload";

export async function POST() {
  const token = (await cookies()).get("inn_access_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  try {
    const decoded = jwt.decode(token) as TokenPayload | null;
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const { nama, user_id, tenant_id, exp, sub } = decoded;
    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    return NextResponse.json({
      nama,
      user_id,
      tenant_id,
      exp,
      sub,
      role,
    });
  } catch (err) {
    console.error("[/api/me] Failed to decode token", err);
    return NextResponse.json({ error: "Token decode error" }, { status: 500 });
  }
}

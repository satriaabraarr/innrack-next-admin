import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "@/types/token-payload";

//untuk yang gagal jika di jwtVerify di middleware.ts
export function extractTenantId(token: string): string | null {
  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return typeof decoded.tenant_id === "string" ? decoded.tenant_id : null;
  } catch {
    return null;
  }
}

export function decodeJwt(token: string): TokenPayload | null {
  try {
    return jwtDecode<TokenPayload>(token);
  } catch (err) {
    console.error("[decodeJwt] Failed to decode token:", err);
    return null;
  }
}

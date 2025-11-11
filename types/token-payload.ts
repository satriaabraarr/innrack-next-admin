export interface TokenPayload {
  tenant_id?: string;
  exp?: number;
  sub?: string;
  nama: string;
  user_id: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}

//lanjutkan sesuai isi token

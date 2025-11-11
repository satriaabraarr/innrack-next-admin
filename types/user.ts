import { Role } from "./role";

export interface User {
  id: number;
  nama: string;
  hp: string;
  email: string | null;
  role: Role;
}

export interface UserList {
  listUserInnSight: User[];
}

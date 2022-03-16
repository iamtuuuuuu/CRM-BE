export default class User {
  id: number;
  name: string;
  email: string;
  status: Status;
  roles: Role[];
}

export enum Status {
  ACTIVE = 'active',
  BAN = 'ban',
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

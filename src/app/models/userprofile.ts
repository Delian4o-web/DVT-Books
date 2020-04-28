export class UserProfile {
  'http://localhost:4200/claims/role': string[];
  nickname: string;
  name: string;
  picture: string;
  // tslint:disable-next-line:variable-name
  updated_at: string;
  email: string;
  // tslint:disable-next-line:variable-name
  email_verified: boolean;
  sub: string;
}

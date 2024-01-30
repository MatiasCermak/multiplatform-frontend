export interface JWTPayload {
  sub:      string;
  userType: UserType[];
  exp:      number;
  iat:      number;
}

export interface UserType {
  authority: string;
}

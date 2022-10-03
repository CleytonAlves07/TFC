import { sign, verify } from 'jsonwebtoken';
import { IUserCredentials } from '../interface/IUser';

const mysecret = process.env.JWT_SECRET || 'eutenhoumsegredo';
export function createToken(user: IUserCredentials): string {
  const token = sign(user, mysecret);

  return token;
}

export function validateToken(token: string): IUserCredentials {
  const decode = verify(token, mysecret);
  return decode as IUserCredentials;
}

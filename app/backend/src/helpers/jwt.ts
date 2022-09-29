import { sign } from 'jsonwebtoken';
import { IUserCredentials } from '../interface/IUser';


export function createToken(user: IUserCredentials): string {
  const mysecret = process.env.JWT_SECRET || 'eutenhoumsegredo';
  const token = sign(user, mysecret);

  return token;
}

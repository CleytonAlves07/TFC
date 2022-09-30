import * as bcrypt from 'bcryptjs';
import IOutput from '../interface/IOutput';
import IToken from '../interface/IToken';
import User from '../database/models/user.model';
import { createToken } from '../helpers/jwt';
import { ILoginUser, IUserCredentials } from '../interface/IUser';
import HttpException from './validations/HttpException';

export default class LoginService {
  private chamaPapai = '';
  public async login(setLogin: ILoginUser): Promise<IOutput<IToken>> {
    console.log('chamaPapai', this.chamaPapai);

    const { email, password } = setLogin;

    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const { id, username, role } = user as IUserCredentials;

        const token = createToken({ id, username, role, email } as IUserCredentials);

        return {
          status: 200,
          data: { token },
        };
      }
    }
    throw new HttpException('unauthorized', 'Incorrect email or password');
  }
}

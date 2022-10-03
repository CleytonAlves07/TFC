import { validateToken } from '../helpers/jwt';
import HttpException from './validations/HttpException';

export default class LoginValidateService {
  public static async loginValidate(authorization?: string) {
    if (!authorization) throw new HttpException('unauthorized', 'User unauthorized!');

    const verify = validateToken(authorization);

    const { role } = verify;

    return {
      status: 200,
      data: { role },
    };
  }
}

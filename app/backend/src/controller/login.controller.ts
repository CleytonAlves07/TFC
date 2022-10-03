import { Response, Request } from 'express';
import LoginService from '../service/login.service';

export default class LoginController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    console.log('controller');

    const { status, data } = await LoginService.login({ email, password });

    res.status(status).json(data);
  }
}

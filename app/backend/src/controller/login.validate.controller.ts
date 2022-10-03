import { Request, Response } from 'express';
import LoginValidateService from '../service/login.validate.service';

export default class LoginValidateController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { authorization } = req.headers;

    const { status, data } = await LoginValidateService.loginValidate(authorization);

    res.status(status).json(data);
  }
}

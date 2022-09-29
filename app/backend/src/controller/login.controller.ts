import { Response, Request } from 'express';
import LoginService from '../service/login.service';


export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }
  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    console.log('controller');
    

    const { status, data } = await this.loginService.login({ email, password });

    res.status(status).json(data);
  }
}
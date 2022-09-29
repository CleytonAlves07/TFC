import { Router } from 'express';
import LoginController from '../controller/login.controller';

const loginController = new LoginController();

const routes = Router();
console.log('routerBefore', loginController);

routes.post('/', loginController.login.bind(loginController) );
console.log('routerAfter');

export default routes;
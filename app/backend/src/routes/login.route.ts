import { Router } from 'express';
import LoginValidateController from '../controller/login.validate.controller';
import LoginController from '../controller/login.controller';

const routes = Router();

routes.post('/', LoginController.login);

routes.get('/', LoginValidateController.login);

export default routes;

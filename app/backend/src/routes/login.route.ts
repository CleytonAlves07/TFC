import { Router } from 'express';
import LoginController from '../controller/login.controller';

const routes = Router();

routes.post('/', LoginController.login);

export default routes;

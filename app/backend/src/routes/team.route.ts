import { Router } from 'express';
import TeamController from '../controller/team.controller';

const routes = Router();

routes.get('/', TeamController.getAll);

export default routes;

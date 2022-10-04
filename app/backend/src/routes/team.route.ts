import { Router } from 'express';
import TeamControllerGetAll from '../controller/team.controller.getAll';
import TeamControllerGetById from '../controller/team.controller.getById';

const routes = Router();

routes.get('/', TeamControllerGetAll.getAll);

routes.get('/:id', TeamControllerGetById.getById);

export default routes;

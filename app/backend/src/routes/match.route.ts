import { Router } from 'express';
import auth from '../middleware/auth';
import MatchController from '../controller/match.controller';
import MatchControllerCreate from '../controller/match.controller.create';


const routes = Router();

routes.get('/', MatchController.getAll);

routes.post('/', auth, MatchControllerCreate.create);

export default routes;
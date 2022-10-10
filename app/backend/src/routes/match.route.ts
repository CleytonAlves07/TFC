import { Router } from 'express';
import auth from '../middleware/auth';
import MatchController from '../controller/match.controller';
import MatchControllerCreate from '../controller/match.controller.create';
import MatchControllerPatch from '../controller/match.controller.patch';


const routes = Router();

routes.get('/', MatchController.getAll);

routes.post('/', auth, MatchControllerCreate.create);

routes.patch('/:id/finish', auth, MatchControllerPatch.update);

export default routes;
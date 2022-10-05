import { Router } from 'express';
import MatchController from '../controller/match.controller';


const routes = Router();

routes.get('/', MatchController.getAll);

export default routes;
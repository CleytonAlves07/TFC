import { Router } from 'express';
import LeaderboardHomeController from '../controller/leaderboard.home.controller';

const routes = Router();

routes.get('/home', LeaderboardHomeController.getAll);

export default routes;
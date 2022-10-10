import { Request, Response } from 'express';
import LeaderboardHomeService from '../service/leaderboard.home.service';


export default class LeaderboardHomeController {
  public static async getAll(req: Request, res: Response) {
    const { status, data } = await LeaderboardHomeService.getHomeTeam();

    res.status(status).json(data);
  }
}

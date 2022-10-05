import { Request, Response } from 'express';
import MatchServiceCreate from '../service/match.service.create';


export default class MatchControllerCreate {
  public static async create(req: Request, res: Response) {
    const {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress
    } = req.body;
    const { status, data } = await MatchServiceCreate.matchCreate(
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress);

    res.status(status).json(data);
  }
}
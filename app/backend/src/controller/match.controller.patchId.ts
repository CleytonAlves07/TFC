import { Request, Response } from 'express';
import MatchServicePatchId from '../service/match.service.patchId';



export default class MatchControllerPatchId {
  public static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const { status, data } = await MatchServicePatchId.matchPatch(Number(id),homeTeamGoals, awayTeamGoals);

    res.status(status).json(data);
  }
}
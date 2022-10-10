import { Request, Response } from 'express';
import MatchServicePatch from '../service/match.service.patch';


export default class MatchControllerPatch {
  public static async update(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await MatchServicePatch.matchPatch(Number(id));
    
    res.status(status).json(data);
  }
}

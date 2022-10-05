import { Request, Response } from 'express';
import MatchService from '../service/match.service'



export default class MatchController {
  public static async getAll(req: Request, res: Response) {
    const { status, data } = await MatchService.getAll();

    res.status(status).json(data);
  }
}
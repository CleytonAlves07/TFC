import { Response, Request } from 'express';
import TeamService from '../service/team.service';

export default class TeamControllerGetAll {
  public static async getAll(req: Request, res: Response) {
    const { status, data } = await TeamService.getAll();

    res.status(status).json(data);
  }
}

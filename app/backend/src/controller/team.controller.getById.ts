import { Request, Response } from 'express';
import TeamServiceGetById from '../service/team.service.getById';

export default class TeamControllerGetById {
  public static async getById(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await TeamServiceGetById.getById(Number(id));

    res.status(status).json(data);
  }
}

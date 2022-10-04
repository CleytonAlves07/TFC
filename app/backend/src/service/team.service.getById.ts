import IOutput from '../interface/IOutput';
import Team from '../database/models/team.model';
import ITeam from '../interface/ITeam';
import HttpException from './validations/HttpException';

export default class TeamServiceGetById {
  public static async getById(id: number): Promise<IOutput<ITeam>> {
    const team = await Team.findByPk(id);
    if (!team) throw new HttpException('validationError', 'Team not found!');

    return {
      status: 200,
      data: team,
    };
  }
}

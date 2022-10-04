import Team from '../database/models/team.model';
import IOutput from '../interface/IOutput';
import ITeam from '../interface/ITeam';

export default class TeamService {
  public static async getAll(): Promise<IOutput<ITeam[]>> {
    const teams = await Team.findAll();
    return {
      status: 200,
      data: teams,
    };
  }
}

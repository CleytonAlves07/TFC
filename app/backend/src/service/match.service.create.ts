import Team from '../database/models/team.model';
import Match from '../database/models/match.model';
import HttpException from './validations/HttpException';



export default class MatchServiceCreate {
  public static async matchCreate(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
    inProgress: boolean) {
    if (homeTeam === awayTeam) {
      throw new HttpException('unauthorized', 'It is not possible to create a match with two equal teams');
    }
    const home = await Team.findByPk( homeTeam );
    const away = await Team.findByPk(awayTeam);
    if (!home  || !away) {
      throw new HttpException('notFoundError', 'There is no team with such id!');
    }
    const changes = await Match.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } );
    if (!changes) throw new HttpException('validationError', 'Match not found!');
    return {
      status: 201,
      data: changes,
    };
  }
};
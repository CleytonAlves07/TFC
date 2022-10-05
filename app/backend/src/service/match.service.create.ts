import Match from '../database/models/match.model';
import HttpException from './validations/HttpException';



export default class MatchServiceCreate {
  public static async matchCreate(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
    inProgress: boolean) {
    const changes = await Match.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } );
    if (!changes) throw new HttpException('validationError', 'Match not found!');
    return {
      status: 201,
      data: changes,
    };
  }
}
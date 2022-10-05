import Team from '../database/models/team.model';
import Match from '../database/models/match.model';
import HttpException from './validations/HttpException';


export default class MatchService {
  public static async getAll() {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName']},
      ]
    });
    if (!matches) throw new HttpException('validationError', 'Nenhum match encontrado!');
    return {
      status: 200,
      data: matches,
    };
  }
}
import Match from '../database/models/match.model';
import HttpException from './validations/HttpException';
import IOutput from '../interface/IOutput';


export default class MatchServicePatch {
  public static async matchPatch(
    id: number,
  ): Promise<IOutput<string>> {

    const changes = await Match.update({inProgress: false},{ where: { id } });
    if (!changes) throw new HttpException('validationError', 'Match not found!');
  return {
    status: 200,
    data: 'Finished'
  }
  }
}
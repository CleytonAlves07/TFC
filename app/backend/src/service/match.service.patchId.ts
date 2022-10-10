import IOutput from '../interface/IOutput';
import Match from '../database/models/match.model';

export default class MatchServicePatchId {
  public static async matchPatch(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number
  ): Promise<IOutput<string>> {
    await Match.update({homeTeamGoals, awayTeamGoals}, {where: {id}})
    return {
      status: 200,
      data: 'Modificação efetuada com sucesso!'
    }
  }
}
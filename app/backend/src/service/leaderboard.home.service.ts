import IOutput from '../interface/IOutput';
import sequelize from '../database/models/index';
import IResultTeams from '../interface/IResultTeams';


export default class LeaderboardHomeService {
  public static async getHomeTeam(): Promise<IOutput<IResultTeams[]>>{
    const [teams] = await sequelize.query(
      `SELECT
  teams.team_name as name,
  CAST(SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) * 3 + SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) as SIGNED) as totalPoints,
  COUNT(*) as totalGames,
  CAST(SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) as SIGNED) as totalVictories,
  CAST(SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) as SIGNED) as totalDraws,
  CAST(SUM(IF(matches.home_team_goals < matches.away_team_goals, 1, 0)) as SIGNED) as totalLosses,
  CAST(SUM(matches.home_team_goals) as SIGNED) as goalsFavor,
  CAST(SUM(matches.away_team_goals) as SIGNED) as goalsOwn,
  CAST(SUM(matches.home_team_goals) - SUM(matches.away_team_goals) as SIGNED) as goalsBalance,
  ROUND((SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) * 3 + SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)))/(COUNT(*) * 3) * 100, 2) as efficiency
  FROM TRYBE_FUTEBOL_CLUBE.matches as matches
  INNER JOIN TRYBE_FUTEBOL_CLUBE.teams as teams
  ON matches.home_team = teams.id
  WHERE matches.in_progress = 'false'
  GROUP BY matches.home_team
  ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC
  `);
    return {
      status: 200,
      data: teams as IResultTeams[]
    };
  }
}




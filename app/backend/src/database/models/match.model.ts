import { DataTypes, Model, ModelStatic } from 'sequelize';
import db from '.';
import Team from './team.model';

export default class Match extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id'
    }
  },
  homeTeamGoals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: DataTypes.INTEGER,
     references: {
      model: 'teams',
      key: 'id'
    }
  },
  awayTeamGoals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },

}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  tableName: 'matches',
});

Match.belongsTo(Team, {
  foreignKey: 'home_team',
  as: 'teamHome',
});

Match.belongsTo(Team, {
  foreignKey: 'away_team',
  as: 'teamAway',
});


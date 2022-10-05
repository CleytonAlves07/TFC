import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Team extends Model {
  public id: number;
  public teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: {
    allowNull: false,
    field: 'team_name',
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  tableName: 'teams',
});

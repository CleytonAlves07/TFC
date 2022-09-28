import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '.';

class User extends Model {

}

User.init({
  id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'users',
});

export default User;

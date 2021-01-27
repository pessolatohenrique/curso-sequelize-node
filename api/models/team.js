"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.Enrollment, {
        foreignKey: "team_id",
      });

      Team.belongsTo(models.Person, {
        foreignKey: "teacher_id",
      });

      Team.belongsTo(models.Level, {
        foreignKey: "level_id",
      });
    }
  }
  Team.init(
    {
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Team",
    }
  );
  return Team;
};

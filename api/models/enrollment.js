"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.Person, {
        foreignKey: "student_id",
      });

      Enrollment.belongsTo(models.Team, {
        foreignKey: "team_id",
      });
    }
  }
  Enrollment.init(
    {
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["confirmado", "cancelado"]],
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Enrollment",
    }
  );
  return Enrollment;
};

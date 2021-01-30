"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models.Enrollment, {
        foreignKey: "student_id",
      });

      Person.hasMany(models.Team, {
        foreignKey: "teacher_id",
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      defaultScope: {
        where: { active: true },
      },
      scopes: {
        all: { where: {} },
        inactives: { where: { active: false } },
      },
      modelName: "Person",
    }
  );
  return Person;
};

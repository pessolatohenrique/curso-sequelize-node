const Service = require("./Service");
const { literal } = require("sequelize");
const enrollment = require("../models").Enrollment;

const MAX_LOTATION = 2;

class TeamService extends Service {
  constructor() {
    super("Team");
  }

  async getCrowed() {
    const teams = await enrollment.findAndCountAll({
      attributes: ["team_id"],
      group: "team_id",
      having: literal(`COUNT(team_id) >= ${MAX_LOTATION}`),
    });

    return teams;
  }
}

module.exports = TeamService;

const { Op } = require("sequelize");
const model = require("../models").Team;

class TeamController {
  static async index(req, res) {
    try {
      const { start, end } = req.query;

      if (!start || !end) {
        return res
          .status(400)
          .json({ message: "querys start and end are required" });
      }

      const teams = await model.findAll({
        where: {
          start_date: { [Op.between]: [start, end] },
        },
      });
      return res.status(200).json(teams);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = TeamController;

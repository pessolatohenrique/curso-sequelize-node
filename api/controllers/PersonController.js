const model = require("../models").Person;

class PersonController {
  static async index(req, res) {
    try {
      const persons = await model.findAll();
      return res.status(200).json(persons);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;

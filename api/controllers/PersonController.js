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

  static async show(req, res) {
    const { id } = req.params;
    try {
      const person = await model.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const person = await model.create(req.body);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await model.update(req.body, {
        where: { id: Number(id) },
      });

      if (updated) {
        const person = await model.findOne({
          where: { id: Number(id) },
        });

        return res.status(200).json(person);
      }

      return res.status(200).json(null);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await model.destroy({ where: { id: Number(id) } });

      if (deleted) {
        return res.status(200).json({ message: `person ${id} was deleted` });
      }

      return res.status(200).json({ message: `person ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async restore(req, res) {
    try {
      const { id } = req.params;
      const restored = await model.restore({ where: { id: Number(id) } });

      if (restored) {
        return res.status(200).json({ message: `person ${id} was restored` });
      }

      return res.status(200).json({ message: `person ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = PersonController;

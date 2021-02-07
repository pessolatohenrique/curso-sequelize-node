const { PersonService } = require("../services");

const service = new PersonService("Person");

class PersonController {
  static async index(req, res) {
    try {
      const persons = await service.findAll();
      return res.status(200).json(persons);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const persons = await service.getActivesAndInactives();
      return res.status(200).json(persons);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getInactive(req, res) {
    try {
      const persons = await service.getInactives();
      return res.status(200).json(persons);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getEnrollments(req, res) {
    try {
      const { id } = req.params;
      const enrollments = await service.getEnrollments(id);
      return res.status(200).json(enrollments);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const person = await service.findOne(id);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const person = await service.create(req.body);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await service.update(req.body, { id: Number(id) });

      if (updated) {
        const person = await service.findOne(id);
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
      const updatedDeleted = await service.destroy(id);

      if (updatedDeleted) {
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

      const restored = await service.restore(id);

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

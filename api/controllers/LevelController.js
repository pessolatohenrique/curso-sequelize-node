const LevelService = require("../services/LevelService");

const service = new LevelService();

class LevelController {
  static async index(req, res) {
    try {
      const levels = await service.findAll();
      return res.status(200).json(levels);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async show(req, res) {
    const { id } = req.params;

    try {
      const level = await service.findOne(id);
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const level = await service.create(req.body);
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await service.update(req.body, { id: Number(id) });

      if (updated) {
        const level = await service.findOne(id);
        return res.status(200).json(level);
      }

      return res.status(200).json(null);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await service.destroy(id);

      if (deleted) {
        return res.status(200).json({ message: `level ${id} was deleted` });
      }

      return res.status(200).json({ message: `level ${id} was not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async restore(req, res) {
    try {
      const { id } = req.params;
      const restored = await service.restore(id);

      if (restored) {
        return res.status(200).json({ message: `level ${id} was restored` });
      }

      return res.status(200).json({ message: `level ${id} was not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = LevelController;

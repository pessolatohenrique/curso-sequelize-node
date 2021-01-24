const model = require("../models").Enrollment;

class EnrollmentController {
  static async show(req, res) {
    try {
      const { student_id, enrollment_id } = req.params;
      const enrollment = await model.findOne({
        where: {
          id: Number(enrollment_id),
          student_id: Number(student_id),
        },
      });

      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const { student_id } = req.params;
      const body = { ...req.body, student_id: Number(student_id) };
      const enrollment = await model.create(body);

      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { student_id, enrollment_id } = req.params;

      const updated = await model.update(req.body, {
        where: {
          id: Number(enrollment_id),
          student_id: Number(student_id),
        },
      });

      if (updated) {
        const enrollment = await model.findOne({
          where: {
            id: Number(enrollment_id),
            student_id: Number(student_id),
          },
        });

        return res.status(200).json(enrollment);
      }

      return res.status(200).json(null);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const { student_id, enrollment_id } = req.params;

      const deleted = await model.destroy({
        where: {
          id: Number(enrollment_id),
          student_id: Number(student_id),
        },
      });

      if (deleted) {
        return res
          .status(200)
          .json({ message: `enrollment ${id} was deleted` });
      }

      return res.status(200).json({ message: `enrollment ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = EnrollmentController;

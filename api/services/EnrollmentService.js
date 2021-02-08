const Service = require("./Service");
const models = require("../models");

class EnrollmentService extends Service {
  constructor() {
    super("Enrollment");
  }

  /**
   * @param {*} enrollment_id
   * @param {*} student_id
   * @override
   */
  async findOne(enrollment_id, student_id) {
    return models[this.modelName].findOne({
      id: Number(enrollment_id),
      student_id: Number(student_id),
    });
  }

  /**
   * @param {*} enrollment_id
   * @param {*} student_id
   * @param {*} transaction
   * @override
   */
  async destroy(enrollment_id, student_id) {
    return models[this.modelName].destroy({
      where: {
        id: Number(enrollment_id),
        student_id: Number(student_id),
      },
    });
  }

  /**
   * @param {*} enrollment_id
   * @param {*} student_id
   * @param {*} transaction
   * @override
   */
  async restore(enrollment_id, student_id) {
    return models[this.modelName].restore({
      where: {
        id: Number(enrollment_id),
        student_id: Number(student_id),
      },
    });
  }
}

module.exports = EnrollmentService;

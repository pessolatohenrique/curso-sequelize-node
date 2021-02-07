const generic = require("../models");
const Service = require("./Service");
const models = require("../models");

class PersonService extends Service {
  constructor() {
    super("Person");
    this.enrollment = new Service("Enrollment");
  }

  async getActivesAndInactives() {
    return models[this.modelName].scope("all").findAll();
  }

  async getInactives() {
    return models[this.modelName].scope("inactives").findAll();
  }

  async getEnrollments(id) {
    const model = await super.findOne(id);
    return model.getEnrollments();
  }

  /**
   * @override
   */
  async destroy(id) {
    await generic.sequelize.transaction(async (t) => {
      await super.destroy(id, t);
      await this.enrollment.update(
        { status: "cancelado" },
        { student_id: Number(id) },
        t
      );
    });

    return true;
  }

  /**
   * @override
   */
  async restore(id) {
    await generic.sequelize.transaction(async (t) => {
      await super.restore(id, t);
      await this.enrollment.update(
        { status: "confirmado" },
        { student_id: Number(id) },
        t
      );
    });

    return true;
  }
}

module.exports = PersonService;

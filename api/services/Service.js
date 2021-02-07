const models = require("../models");

class Service {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async findAll(where) {
    return models[this.modelName].findAndCountAll({ where: { ...where } });
  }

  async findOne(id) {
    return models[this.modelName].findOne({ where: { id: Number(id) } });
  }

  async create(params) {
    return models[this.modelName].create(params);
  }

  async update(params, where, transaction = {}) {
    return models[this.modelName].update(
      params,
      {
        where: { ...where },
      },
      transaction
    );
  }

  async destroy(id, transaction = {}) {
    return models[this.modelName].destroy(
      { where: { id: Number(id) } },
      transaction
    );
  }

  async restore(id, transaction = {}) {
    return models[this.modelName].restore(
      { where: { id: Number(id) } },
      transaction
    );
  }
}

module.exports = Service;

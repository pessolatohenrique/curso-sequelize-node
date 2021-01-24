"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Levels",
      [
        {
          description: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Levels", null, {});
  },
};

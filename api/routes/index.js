const bodyParser = require("body-parser");
const personRoutes = require("./person");
const levelRoutes = require("./level");
const enrollmentRoutes = require("./enrollment");
const teamRoutes = require("./team");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(personRoutes);
  app.use(levelRoutes);
  app.use(enrollmentRoutes);
  app.use(teamRoutes);
};

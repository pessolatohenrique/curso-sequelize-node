const bodyParser = require("body-parser");
const personRoutes = require("./person");
const levelRoutes = require("./level");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(personRoutes);
  app.use(levelRoutes);
};

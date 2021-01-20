const bodyParser = require("body-parser");
const personRoutes = require("./person");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(personRoutes);
};

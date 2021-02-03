const { Router } = require("express");
const TeamController = require("../controllers/TeamController");

const routes = Router();

routes.get("/team", TeamController.index);
routes.get("/team/crowded", TeamController.getCrowded);

module.exports = routes;

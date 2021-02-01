const { Router } = require("express");
const TeamController = require("../controllers/TeamController");

const routes = Router();

routes.get("/team", TeamController.index);

module.exports = routes;

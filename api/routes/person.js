const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/person", PersonController.index);

module.exports = router;

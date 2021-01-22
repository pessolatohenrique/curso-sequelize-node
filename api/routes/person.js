const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/person", PersonController.index);
router.get("/person/:id", PersonController.show);
router.post("/person", PersonController.store);
router.put("/person/:id", PersonController.update);
router.delete("/person/:id", PersonController.delete);

module.exports = router;

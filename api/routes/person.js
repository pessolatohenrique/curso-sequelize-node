const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/person", PersonController.index);
router.get("/person/:id", PersonController.show);
router.post("/person", PersonController.store);
router.put("/person/:id", PersonController.update);
router.delete("/person/:id", PersonController.delete);
router.put("/person/:id/restore", PersonController.restore);

module.exports = router;

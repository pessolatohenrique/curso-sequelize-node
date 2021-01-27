const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();

router.get("/level", LevelController.index);
router.get("/level/:id", LevelController.show);
router.post("/level", LevelController.store);
router.put("/level/:id", LevelController.update);
router.delete("/level/:id", LevelController.delete);
router.put("/level/:id/restore", LevelController.restore);

module.exports = router;

const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/person", PersonController.index);
router.get("/person/all", PersonController.getAll);
router.get("/person/inactive", PersonController.getInactive);
router.get("/person/:id", PersonController.show);
router.get("/person/:id/enrollments", PersonController.getEnrollments);
router.post("/person", PersonController.store);
router.put("/person/:id", PersonController.update);
router.put("/person/:id/restore", PersonController.restore);
router.delete("/person/:id", PersonController.delete);

module.exports = router;

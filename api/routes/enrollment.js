const { Router } = require("express");
const EnrollmentController = require("../controllers/EnrollmentController");

const router = Router();

router.get("/team/:team_id/enrollment", EnrollmentController.index);

router.get(
  "/person/:student_id/enrollment/:enrollment_id",
  EnrollmentController.show
);

router.post("/person/:student_id/enrollment", EnrollmentController.store);

router.put(
  "/person/:student_id/enrollment/:enrollment_id",
  EnrollmentController.update
);

router.delete(
  "/person/:student_id/enrollment/:enrollment_id",
  EnrollmentController.delete
);

router.put(
  "/person/:student_id/enrollment/:enrollment_id/restore",
  EnrollmentController.restore
);

module.exports = router;

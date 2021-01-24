const { Router } = require("express");
const EnrollmentController = require("../controllers/EnrollmentController");

const router = Router();

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

module.exports = router;

const express = require("express");
const router = express.Router();
const studentController = require("./students-controller");

router.get("", studentController.handleGetAllStudents);
router.post("", studentController.handleAddStudent);
router.post("/:id/status", studentController.handleStudentStatus);
router.get("/:id", studentController.handleGetStudentDetail);
router.put("/:id", studentController.handleUpdateStudent);

module.exports = { studentsRoutes: router };

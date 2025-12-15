"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assignment_submission_controller_1 = require("../controller/assignment.submission.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = (0, express_1.Router)();
const controller = new assignment_submission_controller_1.AssignmentSubmissionController();
router.post("/submit", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("student"), (req, res, next) => controller.submitAssignment(req, res, next));
router.get("/assignment/:assignmentId", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher"), (req, res, next) => controller.getSubmissionsForTeacher(req, res, next));
exports.default = router;
//# sourceMappingURL=assignment.submission.router.js.map
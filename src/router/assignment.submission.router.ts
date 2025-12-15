import { Router } from "express";
import { AssignmentSubmissionController } from "../controller/assignment.submission.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";

const router = Router();
const controller = new AssignmentSubmissionController();

// Student submits assignment
router.post(
    "/submit",
    authMiddleware,
    allowRoles("student"),
    (req, res) => controller.submitAssignment(req, res)
);

// Teacher views submissions for an assignment
router.get(
    "/assignment/:assignmentId/teacher/:teacherId",
    authMiddleware,
    allowRoles("teacher"),
    (req, res) => controller.getSubmissions(req, res)
);

export default router;

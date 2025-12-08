import express, { Request, Response } from "express";
import { AssignmentController } from "../controller/assignment.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";
const router = express.Router();
const assignmentController = new AssignmentController();

// CREATE Assignment (only TEACHERs)
router.post(
  "/",
  authMiddleware,
  allowRoles("teacher"),
  (req: Request, res: Response) => {
    assignmentController.createAssignment(req, res);
  }
);

// GET All Assignments (TEACHERs and students)
router.get(
  "/",
  authMiddleware,
  allowRoles("teacher", "student"),
  (req: Request, res: Response) => {
    assignmentController.getAllAssignments(req, res);
  }
);

// GET Assignment by ID (TEACHERs and students)
router.get(
  "/:id",
  authMiddleware,
  allowRoles("teacher", "student"),
  (req: Request, res: Response) => {
    assignmentController.getAssignmentById(req, res);
  }
);

// UPDATE Assignment (only TEACHERs)
router.patch(
  "/:id",
  authMiddleware,
  allowRoles("teacher"),
  (req: Request, res: Response) => {
    assignmentController.updateAssignment(req, res);
  }
);

// DELETE Assignment (only TEACHERs)
router.delete(
  "/:id",
  authMiddleware,
  allowRoles("teacher"),
  (req: Request, res: Response) => {
    assignmentController.deleteAssignment(req, res);
  }
);

export default router;

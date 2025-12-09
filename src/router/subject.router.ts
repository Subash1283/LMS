import express, { Request, Response } from "express";
import { SubjectController } from "../controller/subject.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";

const router = express.Router();
const subjectController = new SubjectController();

// CREATE Subject (admin only)
router.post(
  "/",
  authMiddleware,
  allowRoles("admin"),
  (req: Request, res: Response) => {
    subjectController.createSubject(req, res);
  }
);

// GET all subjects (admin + Teacher + Student)
router.get(
  "/",
  authMiddleware,
  allowRoles("admin", "teacher", "student"),
  (req: Request, res: Response) => {
    subjectController.getAllSubjects(req, res);
  }
);

export default router;

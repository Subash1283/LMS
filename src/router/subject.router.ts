import express, { Request, Response } from "express";
import { SubjectController } from "../controller/subject.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";

const router = express.Router();
const subjectController = new SubjectController();

// CREATE Subject (Admin only)
router.post(
  "/",
  authMiddleware,
  allowRoles("ADMIN"),
  (req: Request, res: Response) => {
    subjectController.createSubject(req, res);
  }
);

// GET all subjects (Admin + Teacher + Student)
router.get(
  "/",
  authMiddleware,
  allowRoles("ADMIN", "TEACHER", "STUDENT"),
  (req: Request, res: Response) => {
    subjectController.getAllSubjects(req, res);
  }
);

export default router;

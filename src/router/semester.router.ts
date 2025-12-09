import express, { Request, Response } from "express";
import { SemesterController } from "../controller/semester.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";



const router = express.Router();
const semesterController = new SemesterController();

// CREATE Semester (ADMIN only)
router.post(
  "/",
  authMiddleware,
  allowRoles("admin"),
  (req: Request, res: Response) => {
    semesterController.createSemester(req, res);
  }
);

// GET all semesters (ADMIN + TEACHER + STUDENT)
router.get(
  "/",
  authMiddleware,
  allowRoles("admin", "teacher", "student"),
  (req: Request, res: Response) => {
    semesterController.getAllSemesters(req, res);
  }
);

export default router;

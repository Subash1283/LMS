import express, { Request, Response } from "express";
import { FacultyController } from "../controller/faculty.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";

const router = express.Router();
const facultyController = new FacultyController();

// CREATE Faculty (Admin only)
router.post(
  "/",
  authMiddleware,
  allowRoles("ADMIN"),
  (req: Request, res: Response) => {
    facultyController.createFaculty(req, res);
  }
);

// GET all faculties (Admin + Teacher)
router.get(
  "/",
  authMiddleware,
  allowRoles("ADMIN", "TEACHER"),
  (req: Request, res: Response) => {
    facultyController.getAllFaculties(req, res);
  }
);

export default router;

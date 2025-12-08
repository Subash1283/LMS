import express, { Request, Response } from "express";
import { TeacherAllocationController } from "../controller/teacher.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";



const router = express.Router();
const allocationController = new TeacherAllocationController();

// CREATE allocation (Admin only)
router.post(
  "/",
  authMiddleware,
  allowRoles("ADMIN"),
  (req: Request, res: Response) => {
    allocationController.createAllocation(req, res);
  }
);

// GET all allocations (Admin + Teacher)
router.get(
  "/",
  authMiddleware,
  allowRoles("ADMIN", "TEACHER"),
  (req: Request, res: Response) => {
    allocationController.getAllAllocations(req, res);
  }
);

export default router;

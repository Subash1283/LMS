import express, { Request, Response } from "express";
import { TeacherAllocationController } from "../controller/teacher.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";



const router = express.Router();
const allocationController = new TeacherAllocationController();

// CREATE allocation (admin only)
router.post(
  "/",
  authMiddleware,
  allowRoles("admin"),
  (req: Request, res: Response) => {
    allocationController.createAllocation(req, res);
  }
);

// GET all allocations (admin + Teacher)
router.get(
  "/",
  authMiddleware,
  allowRoles("admin", "teacher"),
  (req: Request, res: Response) => {
    allocationController.getAllAllocations(req, res);
  }
);

export default router;

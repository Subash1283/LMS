import Router from "express";
import { StudentAllocationController } from "../controller/student.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { allowRoles } from "../middleware/role.middleware";
import { Role } from "@prisma/client";

const router = Router();
const controller = new StudentAllocationController();

router.post( "/assign",
    authMiddleware,
    allowRoles("admin"),
    (req, res, next) => controller.assignStudent(req, res, next)
);

router.get(
    "/all",
    authMiddleware,
    allowRoles("admin","teacher"),
    (req, res, next) => controller.getAllAllocations(req, res, next)
);

router.delete(
    "/delete/:id",
    authMiddleware,
    allowRoles("admin"),
    (req, res, next) => controller.deleteAllocation(req, res, next)
);

export default router;
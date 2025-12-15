"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("../controller/student.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = (0, express_1.default)();
const controller = new student_controller_1.StudentAllocationController();
router.post("/assign", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin"), (req, res, next) => controller.assignStudent(req, res, next));
router.get("/all", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher"), (req, res, next) => controller.getAllAllocations(req, res, next));
router.delete("/delete/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin"), (req, res, next) => controller.deleteAllocation(req, res, next));
exports.default = router;
//# sourceMappingURL=student.router.js.map
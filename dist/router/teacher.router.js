"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacher_controller_1 = require("../controller/teacher.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
const allocationController = new teacher_controller_1.TeacherAllocationController();
// CREATE allocation (admin only)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher"), (req, res) => {
    allocationController.createAllocation(req, res);
});
// GET all allocations (admin + Teacher)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher"), (req, res) => {
    allocationController.getAllAllocations(req, res);
});
exports.default = router;
//# sourceMappingURL=teacher.router.js.map
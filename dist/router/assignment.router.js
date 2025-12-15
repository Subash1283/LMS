"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignment_controller_1 = require("../controller/assignment.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
const assignmentController = new assignment_controller_1.AssignmentController();
// CREATE Assignment (only TEACHERs)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher"), (req, res) => {
    assignmentController.createAssignment(req, res);
});
// GET All Assignments (TEACHERs and students)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher", "student"), (req, res) => {
    assignmentController.getAllAssignments(req, res);
});
// GET Assignment by ID (TEACHERs and students)
router.get("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher", "student"), (req, res) => {
    assignmentController.getAssignmentById(req, res);
});
// UPDATE Assignment (only TEACHERs)
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher"), (req, res) => {
    assignmentController.updateAssignment(req, res);
});
// DELETE Assignment (only TEACHERs)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("teacher"), (req, res) => {
    assignmentController.deleteAssignment(req, res);
});
exports.default = router;
//# sourceMappingURL=assignment.router.js.map
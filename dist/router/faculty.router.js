"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const faculty_controller_1 = require("../controller/faculty.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
const facultyController = new faculty_controller_1.FacultyController();
// CREATE Faculty (Admin only)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin"), (req, res) => {
    facultyController.createFaculty(req, res);
});
// GET all faculties (Admin + Teacher)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher"), (req, res) => {
    facultyController.getAllFaculties(req, res);
});
exports.default = router;
//# sourceMappingURL=faculty.router.js.map
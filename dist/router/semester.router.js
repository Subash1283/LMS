"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const semester_controller_1 = require("../controller/semester.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
const semesterController = new semester_controller_1.SemesterController();
// CREATE Semester (ADMIN only)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin"), (req, res) => {
    semesterController.createSemester(req, res);
});
// GET all semesters (ADMIN + TEACHER + STUDENT)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher", "student"), (req, res) => {
    semesterController.getAllSemesters(req, res);
});
exports.default = router;
//# sourceMappingURL=semester.router.js.map
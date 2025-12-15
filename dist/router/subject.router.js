"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subject_controller_1 = require("../controller/subject.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = express_1.default.Router();
const subjectController = new subject_controller_1.SubjectController();
// CREATE Subject (admin only)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin"), (req, res) => {
    subjectController.createSubject(req, res);
});
// GET all subjects (admin + Teacher + Student)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.allowRoles)("admin", "teacher", "student"), (req, res) => {
    subjectController.getAllSubjects(req, res);
});
exports.default = router;
//# sourceMappingURL=subject.router.js.map
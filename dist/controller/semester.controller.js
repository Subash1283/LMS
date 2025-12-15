"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterController = void 0;
const semester_service_1 = require("../service/semester.service");
class SemesterController {
    semesterService = new semester_service_1.SemesterService();
    async createSemester(req, res) {
        const { name } = req.body;
        const semester = await this.semesterService.createSemester(name);
        res.status(201).json({ message: "Semester created", data: semester });
    }
    async getAllSemesters(req, res) {
        const semesters = await this.semesterService.getAllSemesters();
        res.status(200).json({ data: semesters });
    }
}
exports.SemesterController = SemesterController;
//# sourceMappingURL=semester.controller.js.map
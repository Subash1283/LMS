"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyController = void 0;
const faculty_service_1 = require("../service/faculty.service");
class FacultyController {
    facultyService = new faculty_service_1.FacultyService();
    async createFaculty(req, res) {
        const { name } = req.body;
        const faculty = await this.facultyService.createFaculty(name);
        res.status(201).json({ message: "Faculty created", data: faculty });
    }
    async getAllFaculties(req, res) {
        const faculties = await this.facultyService.getAllFaculties();
        res.status(200).json({ data: faculties });
    }
}
exports.FacultyController = FacultyController;
//# sourceMappingURL=faculty.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const subject_service_1 = require("../service/subject.service");
class SubjectController {
    subjectService = new subject_service_1.SubjectService();
    async createSubject(req, res) {
        const { name, code } = req.body;
        const subject = await this.subjectService.createSubject(name, code);
        res.status(201).json({ message: "Subject created", data: subject });
    }
    async getAllSubjects(req, res) {
        const subjects = await this.subjectService.getAllSubjects();
        res.status(200).json({ data: subjects });
    }
}
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map
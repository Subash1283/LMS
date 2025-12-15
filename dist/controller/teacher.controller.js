"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherAllocationController = void 0;
const teacher_service_1 = require("../service/teacher.service");
class TeacherAllocationController {
    service = new teacher_service_1.TeacherAllocationService();
    async createAllocation(req, res) {
        const { teacherId, subjectId, facultyId, semesterId } = req.body;
        const allocation = await this.service.createAllocation({
            teacherId,
            subjectId,
            facultyId,
            semesterId,
        });
        res.status(201).json({ message: "Allocation created", data: allocation });
    }
    async getAllAllocations(req, res) {
        const allocations = await this.service.getAllAllocations();
        res.status(200).json({ data: allocations });
    }
}
exports.TeacherAllocationController = TeacherAllocationController;
//# sourceMappingURL=teacher.controller.js.map
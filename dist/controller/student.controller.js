"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAllocationController = void 0;
const student_service_1 = require("../service/student.service");
class StudentAllocationController {
    studentAllocationService;
    constructor() {
        this.studentAllocationService = new student_service_1.StudentAllocationService();
    }
    async assignStudent(request, response, next) {
        try {
            const { studentId, subjectId, facultyId, semesterId } = request.body;
            const result = await this.studentAllocationService.assignStudent(studentId, subjectId, facultyId, semesterId);
            response.json({
                message: "Student assigned successfully",
                data: result
            });
        }
        catch (error) {
            response.status(400).json({ message: error.message });
        }
    }
    async getAllAllocations(request, response, next) {
        const result = await this.studentAllocationService.getAllStudentAllocations();
        response.json({ data: result });
    }
    async deleteAllocation(request, response, next) {
        try {
            const id = Number(request.params.id);
            const result = await this.studentAllocationService.deleteStudentAllocation(id);
            response.json({
                message: "Student allocation removed",
                data: result
            });
        }
        catch {
            response.status(404).json({ message: "Allocation not found" });
        }
    }
}
exports.StudentAllocationController = StudentAllocationController;
//# sourceMappingURL=student.controller.js.map
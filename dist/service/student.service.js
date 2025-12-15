"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAllocationService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class StudentAllocationService {
    async assignStudent(studentId, subjectId, facultyId, semesterId) {
        return await prisma.studentAllocation.create({
            data: {
                studentId,
                subjectId,
                facultyId,
                semesterId
            }
        });
    }
    async getAllStudentAllocations() {
        return await prisma.studentAllocation.findMany({
            include: {
                student: true,
                subject: true,
                faculty: true,
                semester: true
            }
        });
    }
    async deleteStudentAllocation(id) {
        return await prisma.studentAllocation.delete({
            where: { id }
        });
    }
}
exports.StudentAllocationService = StudentAllocationService;
//# sourceMappingURL=student.service.js.map
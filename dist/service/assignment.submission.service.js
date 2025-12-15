"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentSubmissionService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class AssignmentSubmissionService {
    async submitAssignment(content, assignmentId, studentId) {
        const assignment = await prisma.assignment.findUnique({
            where: { id: assignmentId }
        });
        if (!assignment) {
            throw new Error("Assignment not found");
        }
        const allocation = await prisma.studentAllocation.findFirst({
            where: {
                studentId,
                subjectId: assignment.subjectId,
                facultyId: assignment.facultyId,
                semesterId: assignment.semesterId
            }
        });
        if (!allocation) {
            throw new Error("Student is not assigned to this assignment");
        }
        return await prisma.assignmentSubmission.create({
            data: {
                content,
                assignmentId,
                studentId
            }
        });
    }
    async getSubmissionsForTeacher(teacherId, assignmentId) {
        const assignment = await prisma.assignment.findUnique({
            where: { id: assignmentId }
        });
        if (!assignment) {
            throw new Error("Assignment not found");
        }
        if (assignment.teacherId !== teacherId) {
            throw new Error("You are not authorized to view submissions for this assignment");
        }
        return await prisma.assignmentSubmission.findMany({
            where: { assignmentId },
            include: {
                student: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });
    }
}
exports.AssignmentSubmissionService = AssignmentSubmissionService;
//# sourceMappingURL=assignment.submission.service.js.map
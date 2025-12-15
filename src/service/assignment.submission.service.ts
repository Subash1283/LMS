import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AssignmentSubmissionService {

    async submitAssignment(
        content: string,
        assignmentId: number,
        studentId: number
    ) {

  
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

    async getSubmissionsForTeacher(teacherId: number, assignmentId: number) {
   
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
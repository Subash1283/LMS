import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class StudentAllocationService {

    async assignStudent(
        studentId: number,
        subjectId: number,
        facultyId: number,
        semesterId: number
    ) {

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

    async deleteStudentAllocation(id: number) {
        return await prisma.studentAllocation.delete({
            where: { id }
        });
    }
}
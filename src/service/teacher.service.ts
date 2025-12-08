import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export class TeacherAllocationService {
  async createAllocation(data: {
    teacherId: number;
    subjectId: number;
    facultyId: number;
    semesterId: number;
  }) {
    return prisma.teacherAllocation.create({ data });
  }

  async getAllAllocations() {
    return prisma.teacherAllocation.findMany();
  }
}

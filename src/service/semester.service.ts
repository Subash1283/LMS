import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export class SemesterService {
  async createSemester(name: string) {
    return prisma.semester.create({ data: { name } });
  }

  async getAllSemesters() {
    return prisma.semester.findMany();
  }
}

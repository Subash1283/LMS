import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class FacultyService {
  async createFaculty(name: string) {
    return prisma.faculty.create({ data: { name } });
  }

  async getAllFaculties() {
    return prisma.faculty.findMany();
  }

  async getFacultyById(id: number) {
    return prisma.faculty.findUnique({ where: { id } });
  }
}

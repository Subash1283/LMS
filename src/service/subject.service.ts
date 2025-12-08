import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export class SubjectService {
  async createSubject(name: string, code: string) {
    return prisma.subject.create({ data: { name, code } });
  }

  async getAllSubjects() {
    return prisma.subject.findMany();
  }

  async getSubjectById(id: number) {
    return prisma.subject.findUnique({ where: { id } });
  }

  async updateSubject(id: number, name?: string, code?: string) {
    return prisma.subject.update({
      where: { id },
      data: { ...(name && { name }), ...(code && { code }) },
    });
  }

  async deleteSubject(id: number) {
    return prisma.subject.delete({ where: { id } });
  }
}

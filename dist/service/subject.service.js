"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class SubjectService {
    async createSubject(name, code) {
        return prisma.subject.create({ data: { name, code } });
    }
    async getAllSubjects() {
        return prisma.subject.findMany();
    }
    async getSubjectById(id) {
        return prisma.subject.findUnique({ where: { id } });
    }
    async updateSubject(id, name, code) {
        return prisma.subject.update({
            where: { id },
            data: { ...(name && { name }), ...(code && { code }) },
        });
    }
    async deleteSubject(id) {
        return prisma.subject.delete({ where: { id } });
    }
}
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map
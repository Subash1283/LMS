"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class FacultyService {
    async createFaculty(name) {
        return prisma.faculty.create({ data: { name } });
    }
    async getAllFaculties() {
        return prisma.faculty.findMany();
    }
    async getFacultyById(id) {
        return prisma.faculty.findUnique({ where: { id } });
    }
}
exports.FacultyService = FacultyService;
//# sourceMappingURL=faculty.service.js.map
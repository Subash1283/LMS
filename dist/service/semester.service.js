"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class SemesterService {
    async createSemester(name) {
        return prisma.semester.create({ data: { name } });
    }
    async getAllSemesters() {
        return prisma.semester.findMany();
    }
}
exports.SemesterService = SemesterService;
//# sourceMappingURL=semester.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherAllocationService = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class TeacherAllocationService {
    async createAllocation(data) {
        return prisma.teacherAllocation.create({ data });
    }
    async getAllAllocations() {
        return prisma.teacherAllocation.findMany();
    }
}
exports.TeacherAllocationService = TeacherAllocationService;
//# sourceMappingURL=teacher.service.js.map
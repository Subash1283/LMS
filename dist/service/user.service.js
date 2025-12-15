"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../generated/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../utils/jwt");
const app_error_1 = require("../error/app.error");
const prisma = new prisma_1.PrismaClient();
class UserService {
    // CREATE (Register)
    async insertUser(userData) {
        const existingUser = await prisma.user.findUnique({
            where: { email: userData.email },
        });
        if (existingUser) {
            throw new app_error_1.AppError("Email already registered", 409, {
                email: "the email is already used",
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(userData.password, 10);
        const result = await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashedPassword,
                role: userData.role,
            },
        });
        return result;
    }
    // READ USER BY EMAIL
    async getUserByEmail(email) {
        const result = await prisma.user.findUnique({
            where: { email },
        });
        return result;
    }
    // LOGIN
    async login(email, password) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new app_error_1.AppError("Email not found", 401, {
                message: "Email does not exist",
            });
        }
        const match = await bcryptjs_1.default.compare(password, user.password);
        if (!match) {
            throw new app_error_1.AppError("Incorrect password", 401, {
                message: "Password does not match",
            });
        }
        const token = (0, jwt_1.generateToken)({
            id: user.id,
            email: user.email,
            role: user.role.toLowerCase(),
        });
        return token;
    }
    // DELETE USER
    async deleteUser(id) {
        await prisma.user.delete({
            where: { id },
        });
    }
    // UPDATE USER (dynamic like your product update)
    async updateUser(id, userData) {
        const updateData = {};
        if (userData.name !== undefined)
            updateData.name = userData.name;
        if (userData.email !== undefined)
            updateData.email = userData.email;
        if (userData.role !== undefined)
            updateData.role = userData.role;
        if (userData.password !== undefined) {
            updateData.password = await bcryptjs_1.default.hash(userData.password, 10);
        }
        const result = await prisma.user.update({
            where: { id },
            data: updateData,
        });
        return result;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
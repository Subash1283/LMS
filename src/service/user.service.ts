import {PrismaClient, Role } from "../generated/prisma";
import { UserModel } from "../model/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";
import { AppError } from "../error/app.error";

const prisma = new PrismaClient();

export class UserService {

  // CREATE (Register)
  async insertUser(userData: Omit<UserModel, "id">): Promise<UserModel> {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email! },
    });

    if (existingUser) {
      throw new AppError("Email already registered", 409, {
        email: "the email is already used",
      });
    }

    const hashedPassword = await bcrypt.hash(userData.password!, 10);

    const result = await prisma.user.create({
      data: {
        name: userData.name!,
        email: userData.email!,
        password: hashedPassword,
        role: userData.role!,
      },
    });

    return result;
  }

  // READ USER BY EMAIL
  async getUserByEmail(email: string): Promise<UserModel | null> {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    return result;
  }

  // LOGIN
  async login(email: string, password: string): Promise<string> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError("Email not found", 401, {
        message: "Email does not exist",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new AppError("Incorrect password", 401, {
        message: "Password does not match",
      });
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role.toLowerCase(),
    });

    return token;
  }

  // DELETE USER
  async deleteUser(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

  // UPDATE USER (dynamic like your product update)
  async updateUser(id: number, userData: Partial<Omit<UserModel, "id">>): Promise<UserModel> {
    const updateData: any = {};

    if (userData.name !== undefined) updateData.name = userData.name;
    if (userData.email !== undefined) updateData.email = userData.email;
    if (userData.role !== undefined) updateData.role = userData.role;

    if (userData.password !== undefined) {
      updateData.password = await bcrypt.hash(userData.password, 10);
    }

    const result = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return result;
  }
}

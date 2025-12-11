import { Assignment } from "../model/assignment.model";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class AssignmentService {

  // CREATE ASSIGNMENT
  async insertAssignment(data: any, loggedInUserId: number): Promise<Assignment> {
    // 1. Get logged-in user
    const user = await prisma.user.findUnique({ where: { id: loggedInUserId } });
    if (!user) throw new Error("User not found");

    if (user.role !== "TEACHER") throw new Error("Only teachers can create assignments");

    if (data.teacherId !== loggedInUserId) throw new Error("You can only create assignments for yourself");

    const teacher = await prisma.user.findUnique({ where: { id: data.teacherId } });
    if (!teacher || teacher.role !== "TEACHER") throw new Error("Invalid teacherId");

    // 2. Check teacher allocation
    const { subjectId, semesterId, facultyId } = data;
    if (!subjectId || !semesterId || !facultyId) {
      throw new Error("subjectId, semesterId, facultyId are required");
    }

    const allocation = await prisma.teacherAllocation.findFirst({
      where: {
        teacherId: loggedInUserId,
        subjectId: Number(subjectId),
        semesterId: Number(semesterId),
        facultyId: Number(facultyId),
      },
    });

    if (!allocation) {
      throw new Error(
        "You are not assigned to this subject/semester/faculty. Cannot create assignment."
      );
    }

    // 3. Create assignment
    return prisma.assignment.create({ data });
  }

  // GET ALL ASSIGNMENTS
  async getAllAssignments(): Promise<Assignment[]> {
    return prisma.assignment.findMany();
  }

  // GET BY ID
  async getAssignmentById(id: number): Promise<Assignment> {
    const assignment = await prisma.assignment.findUnique({ where: { id } });
    if (!assignment) throw new Error("Assignment not found");
    return assignment;
  }

  // UPDATE ASSIGNMENT
 async updateAssignment(
  id: number,
  assignment: Partial<Omit<Assignment, "id">>
): Promise<Assignment> {
  const updateData: any = {};

  if (assignment.title !== undefined) updateData.title = assignment.title;
  if (assignment.description !== undefined) updateData.description = assignment.description;
  if (assignment.dueDate !== undefined) updateData.dueDate = assignment.dueDate;
  if (assignment.teacherId !== undefined) updateData.teacherId = assignment.teacherId;
  if (assignment.subjectId !== undefined) updateData.subjectId = assignment.subjectId;
  if (assignment.facultyId !== undefined) updateData.facultyId = assignment.facultyId;
  if (assignment.semesterId !== undefined) updateData.semesterId = assignment.semesterId;

  return await prisma.assignment.update({
    where: { id },
    data: updateData,
  });
}

  // DELETE ASSIGNMENT
  async deleteAssignment(id: number, loggedInUserId: number): Promise<void> {
    const assignment = await prisma.assignment.findUnique({ where: { id } });
    if (!assignment) throw new Error("Assignment not found");

    if (assignment.teacherId !== loggedInUserId)
      throw new Error("You can only delete your own assignment");

    await prisma.assignment.delete({ where: { id } });
  }
}

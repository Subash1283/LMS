import { Assignment } from "../model/assignment.model";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class AssignmentService {

  // CREATE
  async insertAssignment(
    assignment: Omit<Assignment, "id">
  ): Promise<Assignment> {
    const result = await prisma.assignment.create({
      data: {
        title: assignment.title!,
        description: assignment.description!,
        dueDate: assignment.dueDate!,
        teacherId: assignment.teacherId!,
        subjectId: assignment.subjectId!,
        facultyId: assignment.facultyId!,
        semesterId: assignment.semesterId!,
      },
    });
    return result;
  }

  // READ ALL
  async getAllAssignments(): Promise<Assignment[]> {
    const result = await prisma.assignment.findMany();
    return result;
  }

  // READ BY ID
  async getAssignmentById(id: number): Promise<Assignment> {
    const result = await prisma.assignment.findUnique({
      where: { id },
    });
    return result!;
  }

  // DELETE
  async deleteAssignment(id: number): Promise<void> {
    await prisma.assignment.delete({
      where: { id },
    });
  }

  // UPDATE
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


}

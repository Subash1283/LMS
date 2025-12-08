import { Request, Response } from "express";
import { AssignmentService } from "../service/assignment.service";

export class AssignmentController {
  assignmentService: AssignmentService;

  constructor() {
    this.assignmentService = new AssignmentService();
  }

  // CREATE ASSIGNMENT
  async createAssignment(req: Request, res: Response) {
    try {
      const {
        title,
        description,
        dueDate,
        teacherId,
        subjectId,
        facultyId,
        semesterId,
      } = req.body;

      const newAssignment = await this.assignmentService.insertAssignment({
        title,
        description,
        dueDate: new Date(dueDate),
        teacherId,
        subjectId,
        facultyId,
        semesterId,
      });

      res.status(201).json({
        message: "Assignment created successfully",
        data: newAssignment,
      });
    } catch (error) {
      res.status(400).json({ message: "Failed to create assignment", error });
    }
  }

  // GET ALL
  async getAllAssignments(req: Request, res: Response) {
    const assignments = await this.assignmentService.getAllAssignments();

    res.status(200).json({
      message: "All assignments fetched successfully",
      data: assignments,
    });
  }

  // GET BY ID
  async getAssignmentById(req: Request, res: Response) {
    const id = parseInt(req.params.id!);

    const assignment = await this.assignmentService.getAssignmentById(id);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({
      message: "Assignment fetched successfully",
      data: assignment,
    });
  }

  // UPDATE ASSIGNMENT
  async updateAssignment(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id!);

      const {
        title,
        description,
        dueDate,
        teacherId,
        subjectId,
        facultyId,
        semesterId,
      } = req.body;

      const updatedAssignment = await this.assignmentService.updateAssignment(
        id,
        {
          title,
          description,
          dueDate: dueDate ? new Date(dueDate) : undefined,
          teacherId,
          subjectId,
          facultyId,
          semesterId,
        }
      );

      res.status(200).json({
        message: "Assignment updated successfully",
        data: updatedAssignment,
      });
    } catch (error) {
      res
        .status(404)
        .json({ message: "Assignment not found or update failed" });
    }
  }

  // DELETE ASSIGNMENT
  async deleteAssignment(req: Request, res: Response) {
    const id = parseInt(req.params.id!);

    await this.assignmentService.deleteAssignment(id);

    res.status(200).json({ message: "Assignment deleted successfully" });
  }
}

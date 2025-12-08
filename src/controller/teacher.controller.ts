import { Request, Response } from "express";
import { TeacherAllocationService } from "../service/teacher.service";

export class TeacherAllocationController {
  service = new TeacherAllocationService();

  async createAllocation(req: Request, res: Response) {
    const { teacherId, subjectId, facultyId, semesterId } = req.body;
    const allocation = await this.service.createAllocation({
      teacherId,
      subjectId,
      facultyId,
      semesterId,
    });
    res.status(201).json({ message: "Allocation created", data: allocation });
  }

  async getAllAllocations(req: Request, res: Response) {
    const allocations = await this.service.getAllAllocations();
    res.status(200).json({ data: allocations });
  }
}

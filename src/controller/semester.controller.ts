import { Request, Response } from "express";
import { SemesterService } from "../service/semester.service";

export class SemesterController {
  semesterService = new SemesterService();

  async createSemester(req: Request, res: Response) {
    const { name } = req.body;
    const semester = await this.semesterService.createSemester(name);
    res.status(201).json({ message: "Semester created", data: semester });
  }

  async getAllSemesters(req: Request, res: Response) {
    const semesters = await this.semesterService.getAllSemesters();
    res.status(200).json({ data: semesters });
  }
}

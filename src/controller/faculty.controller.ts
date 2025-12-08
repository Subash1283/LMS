import { Request, Response } from "express";
import { FacultyService } from "../service/faculty.service";

export class FacultyController {
  facultyService = new FacultyService();

  async createFaculty(req: Request, res: Response) {
    const { name } = req.body;
    const faculty = await this.facultyService.createFaculty(name);
    res.status(201).json({ message: "Faculty created", data: faculty });
  }

  async getAllFaculties(req: Request, res: Response) {
    const faculties = await this.facultyService.getAllFaculties();
    res.status(200).json({ data: faculties });
  }
}

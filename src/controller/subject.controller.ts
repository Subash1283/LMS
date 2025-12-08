import { Request, Response } from "express";
import { SubjectService } from "../service/subject.service";

export class SubjectController {
  subjectService = new SubjectService();

  async createSubject(req: Request, res: Response) {
    const { name, code } = req.body;
    const subject = await this.subjectService.createSubject(name, code);
    res.status(201).json({ message: "Subject created", data: subject });
  }

  async getAllSubjects(req: Request, res: Response) {
    const subjects = await this.subjectService.getAllSubjects();
    res.status(200).json({ data: subjects });
  }
}

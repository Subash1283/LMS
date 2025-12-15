import { Request, Response } from "express";
import { SubjectService } from "../service/subject.service";
export declare class SubjectController {
    subjectService: SubjectService;
    createSubject(req: Request, res: Response): Promise<void>;
    getAllSubjects(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=subject.controller.d.ts.map
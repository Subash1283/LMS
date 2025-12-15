import { Request, Response } from "express";
import { SemesterService } from "../service/semester.service";
export declare class SemesterController {
    semesterService: SemesterService;
    createSemester(req: Request, res: Response): Promise<void>;
    getAllSemesters(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=semester.controller.d.ts.map
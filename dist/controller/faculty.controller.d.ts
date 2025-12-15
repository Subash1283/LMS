import { Request, Response } from "express";
import { FacultyService } from "../service/faculty.service";
export declare class FacultyController {
    facultyService: FacultyService;
    createFaculty(req: Request, res: Response): Promise<void>;
    getAllFaculties(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=faculty.controller.d.ts.map
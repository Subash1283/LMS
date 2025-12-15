import { Request, Response } from "express";
import { TeacherAllocationService } from "../service/teacher.service";
export declare class TeacherAllocationController {
    service: TeacherAllocationService;
    createAllocation(req: Request, res: Response): Promise<void>;
    getAllAllocations(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=teacher.controller.d.ts.map
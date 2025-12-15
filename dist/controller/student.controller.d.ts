import { Request, Response, NextFunction } from "express";
import { StudentAllocationService } from "../service/student.service";
export declare class StudentAllocationController {
    studentAllocationService: StudentAllocationService;
    constructor();
    assignStudent(request: Request, response: Response, next: NextFunction): Promise<void>;
    getAllAllocations(request: Request, response: Response, next: NextFunction): Promise<void>;
    deleteAllocation(request: Request, response: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=student.controller.d.ts.map
import { Request, Response } from "express";
import { AssignmentService } from "../service/assignment.service";
export declare class AssignmentController {
    assignmentService: AssignmentService;
    constructor();
    createAssignment(req: Request, res: Response): Promise<void>;
    getAllAssignments(req: Request, res: Response): Promise<void>;
    getAssignmentById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updateAssignment(req: Request, res: Response): Promise<void>;
    deleteAssignment(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=assignment.controller.d.ts.map
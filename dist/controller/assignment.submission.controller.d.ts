import { Request, Response, NextFunction } from "express";
export declare class AssignmentSubmissionController {
    private submissionService;
    constructor();
    submitAssignment(req: Request, res: Response, next: NextFunction): Promise<void>;
    getSubmissionsForTeacher(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=assignment.submission.controller.d.ts.map
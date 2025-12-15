import { Request, Response } from "express";
import { AssignmentSubmissionService } from "../service/assignment.submission.service";

const submissionService = new AssignmentSubmissionService();

export class AssignmentSubmissionController {

    // Student submits assignment
    async submitAssignment(req: Request, res: Response) {
        try {
            const { content, assignmentId, studentId } = req.body;

            if (!content || !assignmentId || !studentId) {
                return res.status(400).json({ success: false, message: "Missing required fields" });
            }

            const result = await submissionService.submitAssignment(content, assignmentId, studentId);
            res.status(201).json({ success: true, data: result });

        } catch (error: any) {
            console.error("Submit assignment error:", error); // logs real error
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Teacher views submissions
    async getSubmissions(req: Request, res: Response) {
        try {
            const teacherId = Number(req.params.teacherId);
            const assignmentId = Number(req.params.assignmentId);

            if (!teacherId || !assignmentId) {
                return res.status(400).json({ success: false, message: "Missing required params" });
            }

            const submissions = await submissionService.getSubmissionsForTeacher(teacherId, assignmentId);
            res.status(200).json({ success: true, data: submissions });

        } catch (error: any) {
            console.error("Get submissions error:", error);
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

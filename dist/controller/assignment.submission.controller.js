"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentSubmissionController = void 0;
const assignment_submission_service_1 = require("../service/assignment.submission.service");
class AssignmentSubmissionController {
    submissionService;
    constructor() {
        this.submissionService = new assignment_submission_service_1.AssignmentSubmissionService();
    }
    // Student submits assignment
    async submitAssignment(req, res, next) {
        try {
            const { assignmentId, content } = req.body;
            // studentId comes from auth middleware
            const studentId = req.user.id;
            const submission = await this.submissionService.submitAssignment(content, assignmentId, studentId);
            res.json({
                message: "Assignment submitted successfully",
                data: submission
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getSubmissionsForTeacher(req, res, next) {
        try {
            const teacherId = req.user.id; // from JWT
            const assignmentId = Number(req.params.assignmentId);
            const submissions = await this.submissionService.getSubmissionsForTeacher(teacherId, assignmentId);
            res.json({
                message: "Submissions fetched successfully",
                data: submissions
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AssignmentSubmissionController = AssignmentSubmissionController;
//# sourceMappingURL=assignment.submission.controller.js.map
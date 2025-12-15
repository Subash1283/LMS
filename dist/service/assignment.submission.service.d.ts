export declare class AssignmentSubmissionService {
    submitAssignment(content: string, assignmentId: number, studentId: number): Promise<{
        id: number;
        studentId: number;
        content: string;
        submittedAt: Date;
        assignmentId: number;
    }>;
    getSubmissionsForTeacher(teacherId: number, assignmentId: number): Promise<({
        student: {
            id: number;
            email: string;
            name: string;
        };
    } & {
        id: number;
        studentId: number;
        content: string;
        submittedAt: Date;
        assignmentId: number;
    })[]>;
}
//# sourceMappingURL=assignment.submission.service.d.ts.map
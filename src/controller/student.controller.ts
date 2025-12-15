import { Request, Response, NextFunction } from "express";
import { StudentAllocationService } from "../service/student.service";

export class StudentAllocationController {

    studentAllocationService: StudentAllocationService;

    constructor() {
        this.studentAllocationService = new StudentAllocationService();
    }

    async assignStudent(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const { studentId, subjectId, facultyId, semesterId } = request.body;

            const result = await this.studentAllocationService.assignStudent(
                studentId,
                subjectId,
                facultyId,
                semesterId
            );

            response.json({
                message: "Student assigned successfully",
                data: result
            });

        } catch (error: any) {
            response.status(400).json({ message: error.message });
        }
    }

    async getAllAllocations(request: Request, response: Response, next: NextFunction): Promise<void> {
        const result = await this.studentAllocationService.getAllStudentAllocations();
        response.json({ data: result });
    }

    async deleteAllocation(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(request.params.id);
            const result = await this.studentAllocationService.deleteStudentAllocation(id);

            response.json({
                message: "Student allocation removed",
                data: result
            });

        } catch {
            response.status(404).json({ message: "Allocation not found" });
        }
    }
}
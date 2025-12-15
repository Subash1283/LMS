export declare class StudentAllocationService {
    assignStudent(studentId: number, subjectId: number, facultyId: number, semesterId: number): Promise<{
        id: number;
        subjectId: number;
        semesterId: number;
        facultyId: number;
        studentId: number;
    }>;
    getAllStudentAllocations(): Promise<({
        subject: {
            id: number;
            name: string;
            code: string;
        };
        faculty: {
            id: number;
            name: string;
        };
        semester: {
            id: number;
            name: string;
        };
        student: {
            id: number;
            email: string;
            name: string;
            password: string;
            role: import("../generated/prisma").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: number;
        subjectId: number;
        semesterId: number;
        facultyId: number;
        studentId: number;
    })[]>;
    deleteStudentAllocation(id: number): Promise<{
        id: number;
        subjectId: number;
        semesterId: number;
        facultyId: number;
        studentId: number;
    }>;
}
//# sourceMappingURL=student.service.d.ts.map
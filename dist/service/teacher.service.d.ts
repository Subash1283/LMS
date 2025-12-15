export declare class TeacherAllocationService {
    createAllocation(data: {
        teacherId: number;
        subjectId: number;
        facultyId: number;
        semesterId: number;
    }): Promise<{
        id: number;
        subjectId: number;
        semesterId: number;
        facultyId: number;
        teacherId: number;
    }>;
    getAllAllocations(): Promise<{
        id: number;
        subjectId: number;
        semesterId: number;
        facultyId: number;
        teacherId: number;
    }[]>;
}
//# sourceMappingURL=teacher.service.d.ts.map
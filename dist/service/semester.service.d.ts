export declare class SemesterService {
    createSemester(name: string): Promise<{
        id: number;
        name: string;
    }>;
    getAllSemesters(): Promise<{
        id: number;
        name: string;
    }[]>;
}
//# sourceMappingURL=semester.service.d.ts.map
export declare class FacultyService {
    createFaculty(name: string): Promise<{
        id: number;
        name: string;
    }>;
    getAllFaculties(): Promise<{
        id: number;
        name: string;
    }[]>;
    getFacultyById(id: number): Promise<{
        id: number;
        name: string;
    } | null>;
}
//# sourceMappingURL=faculty.service.d.ts.map
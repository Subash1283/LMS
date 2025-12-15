export declare class SubjectService {
    createSubject(name: string, code: string): Promise<{
        id: number;
        name: string;
        code: string;
    }>;
    getAllSubjects(): Promise<{
        id: number;
        name: string;
        code: string;
    }[]>;
    getSubjectById(id: number): Promise<{
        id: number;
        name: string;
        code: string;
    } | null>;
    updateSubject(id: number, name?: string, code?: string): Promise<{
        id: number;
        name: string;
        code: string;
    }>;
    deleteSubject(id: number): Promise<{
        id: number;
        name: string;
        code: string;
    }>;
}
//# sourceMappingURL=subject.service.d.ts.map
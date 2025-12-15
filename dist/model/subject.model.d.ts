import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";
export declare class Subject {
    id?: number;
    name?: string;
    code?: string;
    teacherAllocations?: TeacherAllocation[];
    assignments?: Assignment[];
    constructor(name: string, code: string, teacherAllocations?: TeacherAllocation[], assignments?: Assignment[], id?: number);
}
//# sourceMappingURL=subject.model.d.ts.map
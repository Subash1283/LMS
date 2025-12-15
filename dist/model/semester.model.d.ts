import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";
export declare class Semester {
    id?: number;
    name: string;
    teacherAllocations?: TeacherAllocation[];
    assignments?: Assignment[];
    constructor(name: string, teacherAllocations?: TeacherAllocation[], assignments?: Assignment[], id?: number);
}
//# sourceMappingURL=semester.model.d.ts.map
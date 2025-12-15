import { Role } from "../generated/prisma";
import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";
export declare class UserModel {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    role?: Role;
    teacherAllocations?: TeacherAllocation[];
    assignments?: Assignment[];
    constructor(id?: number, name?: string, email?: string, password?: string, role?: Role, teacherAllocations?: TeacherAllocation[], assignments?: Assignment[]);
}
//# sourceMappingURL=user.model.d.ts.map
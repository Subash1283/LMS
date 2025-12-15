import { Assignment } from "../model/assignment.model";
export declare class AssignmentService {
    insertAssignment(data: any, loggedInUserId: number): Promise<Assignment>;
    getAllAssignments(): Promise<Assignment[]>;
    getAssignmentById(id: number): Promise<Assignment>;
    updateAssignment(id: number, assignment: Partial<Omit<Assignment, "id">>): Promise<Assignment>;
    deleteAssignment(id: number, loggedInUserId: number): Promise<void>;
}
//# sourceMappingURL=assignment.service.d.ts.map
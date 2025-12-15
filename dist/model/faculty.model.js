"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faculty = void 0;
class Faculty {
    id;
    name;
    teacherAllocations;
    assignments;
    constructor(name, teacherAllocations, assignments, id) {
        this.name = name;
        if (id)
            this.id = id;
        if (teacherAllocations)
            this.teacherAllocations = teacherAllocations;
        if (assignments)
            this.assignments = assignments;
    }
}
exports.Faculty = Faculty;
//# sourceMappingURL=faculty.model.js.map
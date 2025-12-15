"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semester = void 0;
class Semester {
    id;
    name;
    teacherAllocations;
    assignments;
    constructor(name, teacherAllocations, assignments, id) {
        this.name = name;
        if (teacherAllocations)
            this.teacherAllocations = teacherAllocations;
        if (assignments)
            this.assignments = assignments;
        if (id)
            this.id = id;
    }
}
exports.Semester = Semester;
//# sourceMappingURL=semester.model.js.map
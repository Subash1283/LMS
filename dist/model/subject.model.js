"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    id;
    name;
    code;
    teacherAllocations;
    assignments;
    constructor(name, code, teacherAllocations, assignments, id) {
        this.name = name;
        this.code = code;
        if (teacherAllocations)
            this.teacherAllocations = teacherAllocations;
        if (assignments)
            this.assignments = assignments;
        if (id)
            this.id = id;
    }
}
exports.Subject = Subject;
//# sourceMappingURL=subject.model.js.map
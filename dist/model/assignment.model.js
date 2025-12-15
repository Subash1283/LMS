"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
class Assignment {
    id;
    title;
    description;
    dueDate;
    teacherId;
    subjectId;
    facultyId;
    semesterId;
    constructor(id, title, description, dueDate, teacherId, subjectId, facultyId, semesterId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.teacherId = teacherId;
        this.subjectId = subjectId;
        this.facultyId = facultyId;
        this.semesterId = semesterId;
    }
}
exports.Assignment = Assignment;
//# sourceMappingURL=assignment.model.js.map
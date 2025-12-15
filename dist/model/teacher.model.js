"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherAllocation = void 0;
// src/models/teacherAllocation.model.ts
class TeacherAllocation {
    id;
    teacherId;
    subjectId;
    facultyId;
    semesterId;
    constructor(teacherId, subjectId, facultyId, semesterId, id) {
        this.teacherId = teacherId;
        this.subjectId = subjectId;
        this.facultyId = facultyId;
        this.semesterId = semesterId;
        if (id)
            this.id = id;
    }
}
exports.TeacherAllocation = TeacherAllocation;
//# sourceMappingURL=teacher.model.js.map
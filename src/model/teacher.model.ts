// src/models/teacherAllocation.model.ts
export class TeacherAllocation {
  id?: number;
  teacherId: number;
  subjectId: number;
  facultyId: number;
  semesterId: number;

  constructor(
    teacherId: number,
    subjectId: number,
    facultyId: number,
    semesterId: number,
    id?: number
  ) {
    this.teacherId = teacherId;
    this.subjectId = subjectId;
    this.facultyId = facultyId;
    this.semesterId = semesterId;
    if (id) this.id = id;
  }
}

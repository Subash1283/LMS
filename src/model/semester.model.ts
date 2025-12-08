// src/models/semester.model.ts
import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";

export class Semester {
  id?: number;
  name: string;
  teacherAllocations?: TeacherAllocation[];
  assignments?: Assignment[];

  constructor(
    name: string,
    teacherAllocations?: TeacherAllocation[],
    assignments?: Assignment[],
    id?: number
  ) {
    this.name = name;
    if (teacherAllocations) this.teacherAllocations = teacherAllocations;
    if (assignments) this.assignments = assignments;
    if (id) this.id = id;
  }
}

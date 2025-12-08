// src/models/subject.model.ts
import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";

export class Subject {
  id?:number;
  name?: string;
  code?: string;
  teacherAllocations?: TeacherAllocation[];
  assignments?: Assignment[];

  constructor(
    name: string,
    code: string,
    teacherAllocations?: TeacherAllocation[],
    assignments?: Assignment[],
    id?: number
  ) {
    this.name = name;
    this.code = code;
    if (teacherAllocations) this.teacherAllocations = teacherAllocations;
    if (assignments) this.assignments = assignments;
    if (id) this.id = id;
  }
}

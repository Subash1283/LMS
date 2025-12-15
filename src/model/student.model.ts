import { IsNumber } from "class-validator";

export class StudentModel {

  @IsNumber()
  id?: number;

  @IsNumber()
  studentId!: number;

  @IsNumber()
  subjectId!: number;

  @IsNumber()
  facultyId!: number;

  @IsNumber()
  semesterId!: number;

  constructor(
    id: number,
    studentId: number,
    subjectId: number,
    facultyId: number,
    semesterId: number
  ) {
    this.id = id;
    this.studentId = studentId;
    this.subjectId = subjectId;
    this.facultyId = facultyId;
    this.semesterId = semesterId;
  }
}
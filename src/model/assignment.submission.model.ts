import { IsNumber, IsString } from "class-validator";

export class AssignmentSubmissionModel {

  @IsNumber()
  id?: number;

  @IsString()
  content!: string;

  @IsNumber()
  assignmentId!: number;

  @IsNumber()
  studentId!: number;

  constructor(
    id: number,
    content: string,
    assignmentId: number,
    studentId: number
  ) {
    this.id = id;
    this.content = content;
    this.assignmentId = assignmentId;
    this.studentId = studentId;
  }
}
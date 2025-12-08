import { Role } from "../generated/prisma";
import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";

export class UserModel {
  id?: number;

  name?: string;

  email?: string;

  password?: string;

  role?: Role;

  teacherAllocations?: TeacherAllocation[];

  assignments?: Assignment[];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    role: Role,
    teacherAllocations: TeacherAllocation[],
    assignments: Assignment[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.teacherAllocations = teacherAllocations;
    this.assignments = assignments;
  }
}

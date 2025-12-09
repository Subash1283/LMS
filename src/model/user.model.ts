import { Role } from "../generated/prisma";
import { TeacherAllocation } from "./teacher.model";
import { Assignment } from "./assignment.model";
import { IsNotEmpty, IsEmail, IsString, IsEnum, IsOptional } from "class-validator";

export class UserModel {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  teacherAllocations?: TeacherAllocation[];

  @IsOptional()
  assignments?: Assignment[];

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: Role,
    teacherAllocations?: TeacherAllocation[],
    assignments?: Assignment[]
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

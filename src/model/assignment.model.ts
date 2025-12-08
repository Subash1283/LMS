
export class Assignment {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  teacherId: number;
  subjectId: number;
  facultyId: number;
  semesterId: number;

  constructor(
      id: number,
    title: string,
    description: string,
    dueDate: Date,
    teacherId: number,
    subjectId: number,
    facultyId: number,
    semesterId: number,
  
  ) {
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

import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorhandler";

import Assignment from "./router/assignment.router";
import User from "./router/user.router";
import Faculties from "./router/faculty.router";
import Semester from "./router/semester.router";
import TeacherAllocation from "./router/teacher.router";
import Subject from "./router/subject.router";

dotenv.config();

const app = express();
app.use(express.json());


app.use("/user", User);
app.use("/assignment", Assignment);
app.use("/faculty", Faculties);
app.use("/semester", Semester);
app.use("/teacher", TeacherAllocation);
app.use("/subject", Subject);  

app.use(errorHandler);

export default app;

import dotenv from "dotenv";
import app from "./app";
const port = process.env.port || 3000;
dotenv.config();


app.listen(port,()=>{
    console.log("The server is running at port "+port);
});
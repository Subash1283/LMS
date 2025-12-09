import express,{Request,Response,NextFunction} from "express";
import { UserController } from "../controller/user.controller";
import { Role } from "../generated/prisma";
const router = express.Router();
const userController = new UserController();

router.post("/register",(req:Request,res:Response,next:NextFunction)=>{
    userController.insertUser(req,res,next);
});
router.post("/login",(req:Request,res:Response,next:NextFunction)=>{
    userController.login(req,res,next);
});
export default router;
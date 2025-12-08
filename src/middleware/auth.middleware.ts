import { Request,Response,NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AppError } from "../error/app.error";
export const authMiddleware =(request:Request,response:Response,next:NextFunction)=>{
    try{
    const token = request.headers.authorization?.split(" ") [1];
    if (!token) throw new AppError("JWT token not found",401,{message:"JWT Token not found"});
    
    const decoded = verifyToken(token);
    (request as any).user=decoded;
    next();
    }
    catch(error){
        next(error);
    }
}
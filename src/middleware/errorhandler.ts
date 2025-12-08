import { AppError } from "../error/app.error";
import { Request,Response,NextFunction } from "express";
export const errorHandler=(error:AppError,request:Request, response:Response, next:NextFunction
)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode!).json({
            success: false,
            message: error.message,
            errors: error.errors
        });
    }

    return response.status(500).json({
        success: false,
        message: "Internal server error"
    });
}
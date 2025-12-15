import { AppError } from "../error/app.error";
import { Request, Response, NextFunction } from "express";
export declare const errorHandler: (error: AppError, request: Request, response: Response, next: NextFunction) => Response<any, Record<string, any>>;
//# sourceMappingURL=errorhandler.d.ts.map
import { UserService } from "../service/user.service";
import { Request, Response, NextFunction } from "express";
export declare class UserController {
    authService: UserService;
    constructor();
    insertUser(request: Request, response: Response, next: NextFunction): Promise<void>;
    login(request: Request, response: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=user.controller.d.ts.map
import { UserModel } from "../model/user.model";
import { UserService } from "../service/user.service";
import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { AppError } from "../error/app.error";
import { Jwt } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt";

export class UserController {
  authService: UserService;
  constructor() {
    this.authService = new UserService();
  }

  async insertUser(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    let user = new UserModel(
      request.body.id,
      request.body.name,
      request.body.email,
      request.body.password,
      request.body.role,
      [],
      []
    );

    const errors = await validate(user);

    if (errors.length > 0) {
      const validationErrors: Record<string, string> = {};

      for (const err of errors) {
        if (err.constraints) {
          const message = Object.values(err.constraints);
          if (message.length > 0 && typeof message[0] === "string") {
            validationErrors[err.property] = message[0];
          }
        }
      }

      throw new AppError("Validation failed", 400, validationErrors);
    }
    const result = await this.authService.insertUser(user);
    const {password:_, ...safeUser}=result;
    
    response.status(201).json({
      message: "Data has been inserted successfully",
      data:safeUser
    });
  }

  async login(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.authService.login(
        request.body.email,
        request.body.password
      );
      response.status(400).json({
        Message: "login successfully",
        token: result, 
      });
    } catch (error) {
      next(error);
    }
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../model/user.model");
const user_service_1 = require("../service/user.service");
const class_validator_1 = require("class-validator");
const app_error_1 = require("../error/app.error");
class UserController {
    authService;
    constructor() {
        this.authService = new user_service_1.UserService();
    }
    async insertUser(request, response, next) {
        let user = new user_model_1.UserModel(request.body.id, request.body.name, request.body.email, request.body.password, request.body.role, [], []);
        const errors = await (0, class_validator_1.validate)(user);
        if (errors.length > 0) {
            const validationErrors = {};
            for (const err of errors) {
                if (err.constraints) {
                    const message = Object.values(err.constraints);
                    if (message.length > 0 && typeof message[0] === "string") {
                        validationErrors[err.property] = message[0];
                    }
                }
            }
            throw new app_error_1.AppError("Validation failed", 400, validationErrors);
        }
        const result = await this.authService.insertUser(user);
        const { password: _, ...safeUser } = result;
        response.status(201).json({
            message: "Data has been inserted successfully",
            data: safeUser
        });
    }
    async login(request, response, next) {
        try {
            const result = await this.authService.login(request.body.email, request.body.password);
            response.status(400).json({
                Message: "login successfully",
                token: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
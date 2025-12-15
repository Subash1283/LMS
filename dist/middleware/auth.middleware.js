"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const app_error_1 = require("../error/app.error");
const authMiddleware = (request, response, next) => {
    try {
        const token = request.headers.authorization?.split(" ")[1];
        if (!token)
            throw new app_error_1.AppError("JWT token not found", 401, { message: "JWT Token not found" });
        const decoded = (0, jwt_1.verifyToken)(token);
        request.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map
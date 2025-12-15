import jwt from "jsonwebtoken";
export declare class JWT {
    generateToken(arg: {
        id: number | undefined;
        email: string | undefined;
        role: string | undefined;
    }): string;
}
export declare const generateToken: (payload: any) => string;
export declare const verifyToken: (token: string) => string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map
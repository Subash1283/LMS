import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET_KEY as string;
const expiresIn = process.env.JWT_EXPIRES || "2d";

export class JWT {
  generateToken(arg: { id: number | undefined; email: string | undefined; role: string | undefined; }): string {
    throw new Error("Method not implemented.");
  }
}

export const generateToken = (payload: any) => {
  // Bypass type mismatch by casting to any for expiresIn since jsonwebtoken accepts string or number as string literals
  const options: SignOptions = {
    expiresIn: expiresIn as any,
  };
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};

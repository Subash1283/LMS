import { Request, Response, NextFunction } from "express";

export const allowRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    console.log("user role is "+user.role);

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "access denied" });
    }

    next();
  }
}

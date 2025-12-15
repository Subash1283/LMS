import { UserModel } from "../model/user.model";
export declare class UserService {
    insertUser(userData: Omit<UserModel, "id">): Promise<UserModel>;
    getUserByEmail(email: string): Promise<UserModel | null>;
    login(email: string, password: string): Promise<string>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, userData: Partial<Omit<UserModel, "id">>): Promise<UserModel>;
}
//# sourceMappingURL=user.service.d.ts.map
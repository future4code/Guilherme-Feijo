import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";
import { AuthenticationData } from "../services/Authenticator";

export class UserDataBase extends BaseDataBase {
  public async createUser(user: User): Promise<void> {
    try {
      await BaseDataBase.connection("cookenu_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDataBase.connection("cookenu_user")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getProfile(id1: AuthenticationData): Promise<User[]> {
    try {
      const result = await BaseDataBase.connection("cookenu_user")
        .select("id", "name", "email")
        .where({ id: id1.id });
      return result.map((user: any) => User.toUserModel(user));
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

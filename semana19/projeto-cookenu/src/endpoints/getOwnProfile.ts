import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function getOwnProfile(req: Request, res: Response) {
  try {
    const tokenData = req.headers.authorization as any;

    const authenticator = new Authenticator();
    const resultToken = authenticator.getTokenData(tokenData);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Token inválido");
    }
    const userDataBase = new UserDataBase();
    const [user]: User[] = await userDataBase.getProfile(resultToken);

    res.status(200).send({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

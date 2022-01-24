import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).send("Insira corretamente as informações");
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Este email não foi cadastrado");
    }

    const hashManager = new HashManager();
    const passwordIsCorrect = hashManager.compare(password, user.getPassword());

    if (!passwordIsCorrect) {
      res.status(401).send("Email ou senha incorreta");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generate({
      id: user.getId(),
    });

    res.status(200).send({ message: "Usuário logado com sucesso!", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

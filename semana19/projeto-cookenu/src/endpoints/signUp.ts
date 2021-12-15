import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(422).send("Insira corretamente as informações");
    }

    if (password.length < 6) {
      res.status(422).send("Sua senha precisa ter seis ou mais caracteres");
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (user) {
      res.status(409).send("Este email já foi cadastrado");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword);
    await userDataBase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id });

    res.status(200).send({ message: "Usuário criado com sucesso!", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

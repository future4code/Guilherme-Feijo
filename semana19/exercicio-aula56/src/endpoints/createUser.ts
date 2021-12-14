import { hash } from "../services/HashManager";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerated } from "../services/IdGenerated";
import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password, role } = req.body;

    if (!name || !nickname || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha os campos 'name', 'nickname' , 'email', 'role' e 'password' "
      );
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    // const generate = new IdGenerated()
    // generate.generatedId()

    const id: string = new IdGenerated().generatedId();

    const hashPassword = await hash(user.password);

    const newUser: user = {
      id,
      name,
      nickname,
      email,
      password: hashPassword,
      role,
    };

    await connection("to_do_list_users").insert(newUser);

    const token = new Authenticator().generateToken({ id, role });

    res.status(201).send({ newUser, token });
  } catch (error) {
    if (res.statusCode === 200) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}

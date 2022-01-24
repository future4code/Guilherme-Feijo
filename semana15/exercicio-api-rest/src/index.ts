import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

// EXERCICIO 1
//a - método get
//b - /users para fazer sentido semântico

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (erro: any) {
    res.status(400).send({ message: erro.message });
  }
});

// EXERCÍCIO 2

app.get("/users/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type;
    if (!(type in UserType)) {
      throw new Error("Invalid Parameters");
    } else {
      let filterUser = users.filter((user) => user.type.includes(type));
      if (filterUser.length <= 0) {
        throw new Error("No users found");
      }
      res.status(200).send(filterUser);
    }
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

//EXERCICIO 3

app.get("/users/search", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    const result = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!result.length) {
      throw new Error("User not found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

//EXERCICIO 4

app.put("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id, name, email, type, age } = req.body;

    const reqBody: User = {
      id,
      name,
      email,
      type,
      age,
    };

    if (
      !reqBody.age ||
      !reqBody.email ||
      !reqBody.id ||
      !reqBody.name ||
      !reqBody.type
    ) {
      errorCode = 422;
      throw new Error("Please check the fields.");
    }

    users.push(reqBody);
    res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

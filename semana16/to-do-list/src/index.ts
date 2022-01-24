import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (!(name && nickname && email)) {
      throw new Error("Algum campo está incompleto!");
    }

    const newUser = {
      name,
      nickname,
      email,
    };

    await connection.insert(newUser).into("User");

    res.status(200).send(`${name} criado com sucesso`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await connection("User").where({ id });

    if (!result.length) {
      throw new Error("Usuario não encontrado!");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, nickname, email } = req.body;

    if (!(name && nickname && email)) {
      throw new Error("Algum campo está incompleto!");
    }

    const editUser = {
      name,
      nickname,
      email,
    };
    await connection("User").update(editUser).where({ id });
    res.status(200).send("Usuário editado com sucesso!");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/task", async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creator_user_id } = req.body;
    if (!(title && description && limitDate && creator_user_id)) {
      throw new Error("Algum campo está incompleto!");
    }
    const [day, month, year] = limitDate.split("/");
    const limit_date: Date = new Date(`${year}-${month}-${day}`);
    const newTask = {
      title,
      description,
      limit_date,
      creator_user_id,
    };
    await connection.insert(newTask).into("Task");
    res.status(200).send(`Tarefa criada com sucesso`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
           SELECT Task.id, title, description, limit_date, creator_user_id, nickname FROM Task
           JOIN User
           ON Task.creator_user_id = User.id
           `);
    type task = {
      id: number;
      name: string;
      nickname: string;
      email: string;
      title: string;
      description: string;
      limitDate: string;
      status: string;
      creatorUserId: number;
    };
    const resultMap = result[0].find((taskList: task) => {
      return taskList.id === Number(req.params.id);
    });
    res.send(resultMap);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

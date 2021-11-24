import express, { Request, Response } from "express";
import knex from "knex";
import connection from "./connection";
import app from "./app";

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const countActors = async (gender: string) => {
  const result = await connection("Actor").count().where({ gender: gender });
  return result;
};

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const updateSalary = async (id: string, salary: number) => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where({
      id: id,
    });
};

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

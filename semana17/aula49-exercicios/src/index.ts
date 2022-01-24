import express, { Request, Response } from "express";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306,
  },
});

const app = express();
app.use(express.json());
// -------------------------------------------------------------------------------------
const getAllUsers = async (query: any): Promise<any> => {
  const result = await connection
    .select("*")
    .from("aula49_exercicio")
    .where("name", "LIKE", `%${query}%`);
  return result;
};

app.get("/users", async (req: Request, res: Response) => {
  const query = req.query.name;
  try {
    const result = await getAllUsers(query);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error);
  }
});

//-------------------------------------------------------------------------------

const getAllUsers2 = async (query: any): Promise<any> => {
  const result = await connection
    .select("*")
    .from("aula49_exercicio")
    .where("type", "LIKE", `%${query}%`);
  return result;
};

app.get("/users/:type", async (req: Request, res: Response) => {
  const query = req.params.type;
  try {
    const result = await getAllUsers2(query);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error);
  }
});
//----------------------------------------------------------------------------------------

const getAllUsers4 = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = req.query.query || "%";
    const sort = req.query.sort === "name" ? "name" : "email";
    const order = req.query.order === "desc" ? "desc" : "asc";
    const page = Number(req.query.page) || 1;

    const result = await connection("aula49_exercicio")
      .where("name", "like", `%${query}%`)
      .orWhere("type", "LIKE", `${query}`)
      .orderBy(sort, order)
      .limit(5)
      .offset((page - 1) * 5);

    if (!query) {
      const emptyResult = await connection("aula49_exercicio")
        .select("*")
        .orderBy("name", "desc")
        .offset((page - 1) * 5);
      res.status(200).send(emptyResult);
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({
      message: error.message || "Unexpected error",
    });
  }
};

app.get("/users", getAllUsers4);

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

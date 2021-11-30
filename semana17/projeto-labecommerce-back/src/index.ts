import express, { Express, Request, Response } from "express";
import { connection } from "./connection";
import app from "./app";

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!(name || email || password)) {
      throw new Error("Algum campo está incompleto!");
    }

    const id: string = Date.now().toString();
    const newUser = {
      id,
      name,
      email,
      password,
    };

    await connection.insert(newUser).into("labecommerce_users");

    res.status(200).send(`${name} criado com sucesso`);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
        SELECT * FROM labecommerce_users;
        `);

    if (!result.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
});

app.post("/products", async (req: Request, res: Response) => {
  try {
    const { name, price, image_url } = req.body;

    if (!(name || price || image_url)) {
      throw new Error("Algum campo está incompleto!");
    }

    const id: string = Date.now().toString();
    const newProduct = {
      id,
      name,
      price,
      image_url,
    };

    await connection.insert(newProduct).into("labecommerce_products");

    res.status(200).send(`${name} criado com sucesso`);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
});

app.get("/products", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(`
          SELECT * FROM labecommerce_products;
          `);

    if (!result.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
});

app.post("/purchases", async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const [product] = await connection("labecommerce_products").where({
      id: product_id,
    });
    const total_price = Number(product.price) * quantity;
    await connection("labecommerce_purchases").insert({
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price,
    });
    res.status(200).send(`Compra registrada com sucesso`);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
});

import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function createNewRecipe(req: Request, res: Response) {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(422).send("Insira corretamente as informações");
    }

    const recipeDataBase = new RecipeDataBase();
    const recipe = await recipeDataBase.findRecipeByTitle(title);

    if (recipe) {
      res.status(409).send("Esta receita já foi cadastrada");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    let dateRecipe = new Date(Date.now());

    const newRecipe = new Recipe(id, title, description, dateRecipe);
    await recipeDataBase.createRecipe(newRecipe);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id });

    res.status(200).send({ message: `Receita ${title} criada com sucesso!` });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

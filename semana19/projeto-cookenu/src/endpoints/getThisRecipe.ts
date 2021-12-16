import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function getThisRecipe(req: Request, res: Response) {
  try {
    const tokenData = req.headers.authorization as any;
    const id = req.params.id as any;

    const authenticator = new Authenticator();
    const resultToken = authenticator.getTokenData(tokenData);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Token inválido");
    }
    const recipeDataBase = new RecipeDataBase();
    const [recipe]: Recipe[] = await recipeDataBase.getRecipe({ id });

    res.status(200).send({
      id: recipe.getId(),
      name: recipe.getTitle(),
      email: recipe.getDescription(),
      date: recipe.getCreatedAt(),
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

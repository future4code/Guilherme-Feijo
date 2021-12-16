import { Recipe } from "../entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";
import { AuthenticationData } from "../services/Authenticator";

export class RecipeDataBase extends BaseDataBase {
  public async createRecipe(recipe: Recipe): Promise<void> {
    try {
      await BaseDataBase.connection("cookenu_recipe").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        date: recipe.getCreatedAt(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findRecipeByTitle(title: string): Promise<Recipe> {
    try {
      const recipe = await BaseDataBase.connection("cookenu_recipe")
        .select("*")
        .where({ title });
      return recipe[0] && Recipe.toRecipeModel(recipe[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getRecipe(id1: AuthenticationData): Promise<Recipe[]> {
    try {
      const result = await BaseDataBase.connection("cookenu_recipe")
        .select("*")
        .where({ id: id1.id });
      return result.map((recipe: any) => Recipe.toRecipeModel(recipe));
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

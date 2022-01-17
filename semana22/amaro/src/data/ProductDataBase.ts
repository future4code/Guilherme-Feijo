import { Product } from "../model/Product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
  public async findProductById(id: string): Promise<Product> {
    try {
      const product = await BaseDataBase.connection("amaro_products")
        .select("*")
        .where({ id });
      return Product.toProductModel(product[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findProductByName(name: string): Promise<Product> {
    try {
      const product = await BaseDataBase.connection("amaro_products")
        .select("*")
        .where({ name });
      return Product.toProductModel(product[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findProductByTag(tag: string): Promise<Product> {
    try {
      const product = await BaseDataBase.connection(
        "amaro_products inner join amaro_tags"
      )
        .select("name_product")
        .where({ tag });
      return Product.toProductModel(product[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

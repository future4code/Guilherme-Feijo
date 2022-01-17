export class Product {
  constructor(private id: string, private name: string) {}

  static toProductModel(data: any): Product {
    return new Product(data.id, data.name);
  }
}

export class Tag {
  constructor(
    private id: string,
    private id_product: string,
    private name: string
  ) {}
}

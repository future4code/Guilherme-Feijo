import { app } from "./app";
import { getProductById } from "./endpoints/getProductById";
import { getProductByName } from "./endpoints/getProductByName";
import { register } from "./endpoints/register";

app.post("/register", register);
app.get("/product/:id", getProductById);
app.get("product/:name", getProductByName);

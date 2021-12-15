import { app } from "./app";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";

app.post("/user", signUp);
app.post("/login", login);

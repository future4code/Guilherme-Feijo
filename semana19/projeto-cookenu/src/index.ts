import { app } from "./app";
import { createNewRecipe } from "./endpoints/createNewRecipe";
import { getOtherProfile } from "./endpoints/getOtherProfile";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { getThisRecipe } from "./endpoints/getThisRecipe";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";

app.get("/user/profile", getOwnProfile);
app.get("/user/:id", getOtherProfile);
app.get("/recipe/:id", getThisRecipe);
app.post("/signup", signUp);
app.post("/login", login);
app.post("/recipe", createNewRecipe);

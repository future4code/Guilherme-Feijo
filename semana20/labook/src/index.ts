import { app } from "./controller/app";
import { PostController } from "./controller/PostController";

app.get("/", (req, res)=>{
  res.send("Hello from Express")
})

const postController = new PostController()

app.get("/posts/:id", postController.getPostById)
import express from "express";
import routes from "./src/config/routes/posts.js";

const app = express();
routes(app);

app.listen(3000, () => (console.log("Serv listening")));

const buscarPostPorId = (id) => posts.find((post) => post.id === Number(id));
app.get("/posts/:id", (req, res) => (res.status(200).json(buscarPostPorId(req.params.id)))); 
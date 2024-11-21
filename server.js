import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const app = express();
app.use(express.json());

const buscarPostPorId = (id) => posts.find((post) => post.id === Number(id));

app.listen(3000, () => (console.log("Serv listening")));


const getAllPosts = () => {
    const db = conexao.db("imersao-instabyte");    
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
app.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => (res.status(200).json(buscarPostPorId(req.params.id)))); 
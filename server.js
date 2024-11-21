import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
await conectarAoBanco(process.env.STRING_CONEXAO)

// Mock
const posts = [
    {
        id: 1,
        desc: "Foto teste",
        img: "https://placecats.com/millie/300/150",
        alt: "Descrição da imagem"
    },
    {
        id: 2,
        desc: "Paisagem incrível!",
        img: "https://placecats.com/millie/300/150/200/300",
        alt: "Descrição da imagem"
    },
    {
        id: 3,
        desc: "Meu novo projeto!",
        img: "https://placecats.com/millie/300/150",
        alt: "Descrição da imagem"
    },
];

const app = express();
app.use(express.json());

const buscarPostPorId = (id) => posts.find((post) => post.id === Number(id));

app.listen(3000, () => (console.log("Serv listening")));

app.get("/posts", (req, res) => (res.status(200).json(posts)));

app.get("/posts/:id", (req, res) => (res.status(200).json(buscarPostPorId(req.params.id)))); 
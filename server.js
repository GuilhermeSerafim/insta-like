import express from "express";

// Mock
const posts = [
    {
        id: 1,
        desc: "Foto teste",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-20",
        autor: "João Silva",
        likes: 10
    },
    {
        id: 2,
        desc: "Paisagem incrível!",
        img: "https://placecats.com/millie/300/150/200/300",
        data: "2023-11-19",
        autor: "Ana Maria",
        likes: 25
    },
    {
        id: 3,
        desc: "Meu novo projeto!",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-18",
        autor: "Pedro Santos",
        likes: 15
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => (console.log("Serv listening")));

app.get("/posts", (req, res) => (res.status(200).json(posts)));

const buscarPostPorId = (id) => posts.find((post) => post.id === Number(id));

app.get("/posts/:id", (req, res) => (res.status(200).json(buscarPostPorId(req.params.id)))); 
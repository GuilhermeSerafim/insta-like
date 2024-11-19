import express from "express";

// Mocando dados
const posts = [
    {
        desc: "Foto teste",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-20",
        autor: "João Silva",
        likes: 10
    },
    {
        desc: "Paisagem incrível!",
        img: "https://placecats.com/millie/300/150/200/300",
        data: "2023-11-19",
        autor: "Ana Maria",
        likes: 25
    },
    {
        desc: "Meu novo projeto!",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-18",
        autor: "Pedro Santos",
        likes: 15
    },
    // Adicione mais 2 objetos aqui...
    {
        desc: "Gato dormindo!",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-17",
        autor: "Maria Oliveira",
        likes: 30
    },
    {
        desc: "Cachorro brincando!",
        img: "https://placecats.com/millie/300/150",
        data: "2023-11-16",
        autor: "Carlos Pereira",
        likes: 20
    }
];

const app = express();
app.listen(3000, () => {
    console.log("Serv listening");
});

app.get("/api", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/livro", (req, res) => {
    res.status(200).send({
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "ano": 1954,
        "genero": "Fantasia"
    });
});
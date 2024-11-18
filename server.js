import express from "express";

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
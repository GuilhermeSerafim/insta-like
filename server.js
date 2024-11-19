import express from "express";

// Mockando dados
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
// Configura o middleware para que o servidor consiga interpretar o corpo de requisições no formato JSON.
app.use(express.json());

/*
    O que é middleware em Express?
    No Express, um middleware é qualquer função que processa requisições e respostas. Ele pode ser usado para:

    Adicionar funcionalidades à aplicação (por exemplo, autenticação, manipulação de erros).
    Processar o corpo da requisição (como interpretar JSON).
    Registrar logs de requisições.
    Permitir ou negar acesso a determinadas rotas. 
*/

app.listen(3000, () => {
    console.log("Serv listening");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/livro", (req, res) => {
    res.status(200).send({
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "ano": 1954,
        "genero": "Fantasia"
    });
});
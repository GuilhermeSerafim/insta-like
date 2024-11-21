import { getAllPosts, createPost } from "../models/posts.js";

export async function listarPosts(req, res) {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
};

export async function postarNovoPost(req, res) {
    const postEnviadoPeloCliente = req.body;
    try {
        const postCriado = await createPost(postEnviadoPeloCliente);
        return res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": erro.message });
    }
} 
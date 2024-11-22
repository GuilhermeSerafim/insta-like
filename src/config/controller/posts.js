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

export async function uploadImg(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await new(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}
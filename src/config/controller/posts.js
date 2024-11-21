import getAllPosts from "../models/posts.js";

export const listarPosts = async (req, res) => {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
};
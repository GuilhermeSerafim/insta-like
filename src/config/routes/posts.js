import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImg } from "../controller/posts.js";

// Configurações windows upload da imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImg); // Single é um middleware que diz que é um arquivo por vez
}
export default routes;
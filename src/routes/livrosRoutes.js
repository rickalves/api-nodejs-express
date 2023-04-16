import express from 'express'
import LivroController from '../controllers/livrosController.js'

const router = express.Router();

router
    .get("/livros", LivroController.buscarLivros)
    .get("/livros/:id", LivroController.buscarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;
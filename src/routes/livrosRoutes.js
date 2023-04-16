import express from 'express'
import LivroController from '../controllers/livrosController.js'

const router = express.Router();

//(get > post > put > delete )
router
    .get("/livros", LivroController.buscarLivros)
    .get("/livros/buscar", LivroController.buscarLivroPorEdidora)//mais especifico vem antes...
    .get("/livros/:id", LivroController.buscarLivroPorId)//(:id) parametro de busca (req.params)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;
import express from 'express'
import autoresController from "../controllers/autoresController.js"

const router = express.Router();

router
    .get("/autores", autoresController.buscarAutores)
    .get("/autores/:id", autoresController.buscarAutorPorId)
    .post("/autores", autoresController.cadastrarAutor)
    .put("/autores/:id", autoresController.atualizarAutor)
    .delete("/autores/:id", autoresController.excluirAutor)

export default router;
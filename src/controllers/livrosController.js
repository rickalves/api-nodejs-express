import livros from "../models/Livro.js";

class LivroController{

    static buscarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static buscarLivroPorId = (req, res) => {
        const {id} = req.params
        livros.findById(id, (err, livro) => {
            if(!err){
                res.status(200).json(livro);
            }else{
                res.status(400).send({message: `${err.message} - Erro ao buscar.`})
            }
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ai cadastrar livro!`})
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const {id} = req.params
        const livro = buscaLivro(id)
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: `Livro atualizado com sucesso!`})
            }else{
                res.status(500).send({message: `${err.message} - Erro ao atualizar.`})
            }
        });
    }

    static excluirLivro = (req, res) => {
        const {id} = req.params
        livros.findByIdAndRemove(id, (err) => {
            if(!err){
                res.status(200).send({message: `Livro excluido com sucesso!`})
            }else{
                res.status(400).send({message: `${err.message} - Erro ao excluir.`})
            }
        });
    }
}

export default LivroController
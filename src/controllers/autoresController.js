import autores from "../models/Autor.js";

class AutorController{

    static buscarAutores = (req, res) => {
        autores.find((err, Autors) => {
            res.status(200).json(Autors);
        });
    }

    static buscarAutorPorId = (req, res) => {
        const {id} = req.params
        autores.findById(id, (err, autor) => {
            if(!err){
                res.status(200).json(autor);
            }else{
                res.status(400).send({message: `${err.message} - Erro ao buscar.`})
            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ai cadastrar Autor!`})
            }else{
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const {id} = req.params
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: `Autor atualizado com sucesso!`})
            }else{
                res.status(500).send({message: `${err.message} - Erro ao atualizar.`})
            }
        });
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params
        autores.findByIdAndRemove(id, (err) => {
            if(!err){
                res.status(200).send({message: `Autor excluido com sucesso!`})
            }else{
                res.status(400).send({message: `${err.message} - Erro ao excluir.`})
            }
        });
    }
}

export default AutorController
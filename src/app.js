import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

//testa conexão
db.on("error", console.log.bind(console, 'Erro de conexão...'));
//abre conexão
db.once("open", () => {
    console.log("Sucesso ao conectar DB!")
});

const app = express();
routes(app);

// app.get('/livros/:id', (req, res) => {
//     const index = getBookIndex(req.params.id)
//     res.json(books.at(index))
// })

// app.post('/livros', (req, res) => {
//     books.push(req.body);
//     res.status(201).send('Livro cadastrado com sucesso!');
// })

// app.put('/livros/:id', (req, res) => {
//     let {id} = req.params
//     const index = getBookIndex(id)
//     books.at(index).titulo = req.body.titulo
//     res.status(201).send('Livro atualizado com sucesso!');
// })

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params
//     const index = getBookIndex(id)
//     books.splice(index, 1)
//     res.status(201).send(`Livro ${id} deletado com sucesso!`);
// })

// function getBookIndex(id){
//     return books.findIndex(book => book.id == id);
// }

export default app;


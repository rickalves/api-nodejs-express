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

export default app;
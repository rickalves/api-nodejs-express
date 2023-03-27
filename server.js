const http = require('http')
const port = 3000;
const rotas = {
  '/': 'Bem vindo ao Home!',
  '/livros': 'Livros',
  '/autores': 'Autores',  
}
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () =>{
    console.log(`Servidor executando em: http://localhost:${port}`)
});


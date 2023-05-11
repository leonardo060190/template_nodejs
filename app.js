const express = require('express')
const app = express()
const port = 3000

//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');

//identificação da rota e da const (require) associada
app.use('/livros',livros);
//a rota /livros retorna a lista dos livros cadastrados em formato json


//aplicação pelo método get vai buscar a rota
//localhost:3000/
app.get('/', (req, res) => {
  res.send('Leonardo Domingos Patricio!')
})

//exemplo relacionado a filmes
app.use(express.json()); //começa a receber json
app.post('/filmes', (req, res) => {
  //const titulo = req.body.titulo;
  //const genero = req.body.genero;
  const { titulo, genero } = req.body;
  res.send(`Filme: ${titulo} - Genero: ${genero}, recebido`);
});

//exemplo relacionado a livros
app.post('/livros', (req, res) => {
  const { autor, nome, editora } = req.body;
res.send(`Autor: ${autor} - Nome: ${nome} - Editora: ${editora}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
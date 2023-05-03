const express = require('express')
const app = express()
const port = 3000

//aplicação pelo método get vai buscar a rota
//localhost:3000/
app.get('/', (req, res) => {
  res.send('Leonardo Domingos!')
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
//importando o express
const express = require('express')

//definindo uma contate e executar funcao express
const app = express();

//criando uma rota
app.get("/",(req, res) => {
    res.send("Hello mundo")
});

app.get("/pessoa",(req, res) => {
    res.send("tela relacionado a pessoa")
});

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
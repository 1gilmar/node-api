//importando o express
const express = require('express')

//definindo uma contate e executar funcao express
const app = express();

//criando uma rota
app.get("/",(req, res) => {
    res.send("Hello mundo")
});

app.get("/pessoa",(req, res) => {
    res.send("alterado para verifiar o nodemon sincronizar")
});

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
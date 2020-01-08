//importando o express
const express = require('express')
const mongoose = require('mongoose')

//definindo uma contate e executar funcao express; iniciando o app
const app = express();

//inicionado o banco de dados
mongoose.connect('mongodb://localhost:27017/mongoapi');

//criando uma rota
app.get("/",(req, res) => {
    res.send("Hello mundo");
});

app.get("/pessoa",(req, res) => {
    res.send("alterado para verifiar o nodemon sincronizar");
});

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
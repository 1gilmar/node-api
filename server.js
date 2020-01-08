//importando o express
const express = require('express')
const mongoose = require('mongoose')

//definindo uma contate e executar funcao express; iniciando o app
const app = express();

//inicionado o banco de dados
mongoose.connect('mongodb://localhost:27017/mongoapi');

//registrando o model na aplicacao
require('./src/models/Product');

//criando uma rota
app.get("/",(req, res) => {
    res.send("Hello mundo");
});

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
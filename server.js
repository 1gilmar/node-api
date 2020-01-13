//importando o express
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const db = require("./src/config/db");

//definindo uma contate e executar funcao express; iniciando o app
const app = express();
app.use(express.json()); //permitir enviar dados via jason
app.use(cors())          //permite para ser acessada publicamente

//inicionado o banco de dados
 mongoose.connect(db.mongoURI, { useNewUrlParser: true });

// 'mongodb+srv://deploy:senha@cluster0-jzfpn.gcp.mongodb.net/test?retryWrites=true&w=majority', 

//registrando o model na aplicacao
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
//importando o express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//definindo uma contate e executar funcao express; iniciando o app
const app = express();

//inicionado o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
 );

//registrando o model na aplicacao
requireDir('./src/models');

//instanciando o objeto para validar se esta funcionando
const Produto = mongoose.model('Product');

//criando uma rota
app.get("/",(req, res) => {

    Produto.create({ 
        title: 'primeito produto',
        description: 'criando a primeira descricao',
        url: 'www.mongoose.com'
    })

    return res.send("Hello mundo");
});

//fazendo a aplicacao ouvir a porta 3001
app.listen(3001);
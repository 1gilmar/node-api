const express = require('express');

const routes = express.Router();

//criando uma rota
routes.get("/",(req, res) => {

//    Produto.create({ 
//        title: 'primeito produto',
//        description: 'criando a primeira descricao',
//        url: 'www.mongoose.com'
//    })

    return res.send("Hello mundo");
});

module.exports = routes;

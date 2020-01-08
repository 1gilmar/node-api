const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//criando uma rota
routes.get("/produtos", ProductController.index);

module.exports = routes;

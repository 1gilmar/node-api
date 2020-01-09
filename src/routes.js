const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//criando uma rota
routes.get("/produtos", ProductController.index);
routes.get("/produtos/:id", ProductController.show);
routes.post("/produtos", ProductController.store);

module.exports = routes;

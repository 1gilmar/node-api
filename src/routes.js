const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//criando uma rota
routes.get("/produtos", ProductController.index);
routes.get("/produtos/:id", ProductController.show);
routes.post("/produtos", ProductController.store);
routes.put("/produtos/:id", ProductController.update);
routes.delete("/produtos/:id",ProductController.destroy);

module.exports = routes;

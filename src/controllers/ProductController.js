const mongoose = require('mongoose');

const Produto = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Produto.find();

        return res.json(products);
    },

    async store(req, res){
        const product = await Produto.create(req.body);

        return res.json(product);
    }
}
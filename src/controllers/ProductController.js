const mongoose = require('mongoose');

const Produto = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Produto.find();

        return res.json(products);
    },

    async show(req, res){
        const product = await Produto.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Produto.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        //new: true é para retornar o produto atualizado
        const product = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res){
    }
}
const mongoose = require('mongoose');

const Produto = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Produto.find();

        return res.json(products);
    }
}
const mongoose = require('mongoose');

const Produto = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //pegando o parametro passado no browser e usando o valor default quando nao for passado nada.
        const {page = 1} = req.query;

        //primeiro parametro do paginate e o where, segundo esta relacionado a paginacao.
        const products = await Produto.paginate({},{page, limit:10});

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
        await Produto.findByIdAndRemove(req.params.id);

        //retorna uma responsta de sucesso sem nenhum conteudo
        return res.send()
    }
}
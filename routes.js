const express = require('express')
const routes = express.Router()
const products = require('./products')

routes.get('/', function(req, res){
    return res.render("index")
})

routes.get('/cadastro', function(req, res){
    return res.render("cadastro")
})

routes.post('/cadastro', products.post)

routes.get('/estoque', function(req, res){
    return res.render("estoque")
})

routes.get('/entrada', function(req, res){
    return res.render("entrada")
})

routes.get('/vendas', function(req, res){
    return res.render("vendas")
})

module.exports = routes
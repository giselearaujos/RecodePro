const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

//models
require('./src/models/Comentarios');
const Comentarios = mongoose.model("comentarios");

require('./src/models/Produto');
const Produto = mongoose.model("produtos");

//connection
require('./src/db/connection');

app.use(express.json())
app.use(cors());

app.get('/produtos', async (req, res) => {
    const produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;

    return res.json(produtoJson);
})

app.get('/mostrar', async (req, res) => {
    const comentariosResponse = await Comentarios.find();
    const comentariosJson = await comentariosResponse;

    return res.json(comentariosJson);
})

app.post('/comentarios', (req, res) => {
    const novoComentario =  new Comentarios({
        nome: req.body.nome,
        msg: req.body.msg,
    })
    novoComentario.save()
    res.json({message: "Cadastro efetuado!",comentario: novoComentario})

})

app.listen(5000);

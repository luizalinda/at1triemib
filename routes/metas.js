module.exports = (app)=>{
    var conexao = require('../config/database')
    var modelo = require('../models/metas')

    app.get('/metas',(req,res)=>{
        conexao()
        modelo.find()
        .then((modelo)=>{
            res.render('metas.ejs',{dados:modelo})
        })
        .catch(()=>{
            res.render('metas.ejs')
        })
    })

    app.post('/metas',(req,res)=>{
        conexao()
        var documento = new modelo({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{
            res.redirect('/metas')
        })
        .catch(()=>{
            res.send('Não foi possível gravar os dados no DB')
        })
    })
}
const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:Lu0612@fiaptecnico.0ptot.mongodb.net/test')
}

module.exports = conexao
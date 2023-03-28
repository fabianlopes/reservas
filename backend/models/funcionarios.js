const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const funcionario = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true},
    funcao     : { type:String, required: true}
})

const FuncionarioModel = mongoose.model('funcionarioss', funcionario);


module.exports = {FuncionarioModel}
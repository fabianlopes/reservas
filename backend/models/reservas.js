const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});
const novoNumero  = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;

var reserva = new Schema ({

    numero      : { type:Number ,  unique: true },
    sala        : { type:String },//, required: true},
    cliente     : { type:String },// required: true},
    funcionario : { type:String },// required: true},
    data        : { type:Date },//   required: true},            
    inicio      : { type:Number },// required: true},
    fim         : { type:Number },// required: true},
    valortotal  : { type:Number },// required: true},    
    observacao  : { type:String },// required: true},
    status      : { type:String } // required: true}    
})

// Adiciona o campo de auto incremento ao esquema
reserva.plugin(novoNumero , { inc_field: 'numero' });

const reservaModel = mongoose.model('reservas_collections', reserva);


module.exports = {reservaModel}
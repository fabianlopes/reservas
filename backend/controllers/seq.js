const reserva = require('../models/reservas');

exports.seq = async(req, res) => {
    
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connection.on('error', (err) => {
    console.error('Erro de conexão:', err);
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados');
  });

//mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const reservaSchema = new mongoose.Schema({
  sala: { type: String, required: true },
  cliente: { type: String, required: true },
  funcionario: { type: String, required: true },
  data: { type: Date, required: true },
  inicio: { type: Number, required: true },
  fim: { type: Number, required: true },
  valortotal: { type: Number, required: true },
  observacao: { type: String, required: true },
  status: { type: String, required: true },
});

reservaSchema.plugin(AutoIncrement, { inc_field: 'numero' });

const Reserva = mongoose.model('Reserva', reservaSchema);

(async () => {
  try {

    console.log('apaga tudo')
    await mongoose.connection.dropDatabase();
    console.log('criancdo reserva')
    const reserva = new Reserva({
      sala: 'Sala 01',
      cliente: 'Cliente 01',
      funcionario: 'Funcionário 01',
      data: new Date(),
      inicio: 8,
      fim: 9,
      valortotal: 100,
      observacao: 'Observação 01',
      status: 'Ativo',
    });

    console.log('Reserva antes de salvar:', reserva);

    try {
        const reservaSalva = await reserva.save();
        console.log('Reserva salva:', reservaSalva);
        res.status(201).json(reservaSalva);
      } catch (error) {
        console.error('Erro ao salvar reserva:', error);
        res.status(500).json({ error: 'Erro ao salvar reserva' });
      }

    console.log('Reserva após salvar:', reserva);
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await mongoose.connection.close();
  }
})();

};
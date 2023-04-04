const reserva = require('../models/reservas')

exports.consultaReservas = async (req, res) => {   
  const { inicio, fim } = req.query;

  // Verifica se os parâmetros estão presentes
  if (!inicio || !fim) {
    res.status(400).json({ message: 'Parâmetros inválidos' });
  } else {
    // Converte as datas para objetos Date
    const inicioData = new Date(inicio);
    const fimData = new Date(fim);

    // Verifica se as datas são válidas
    if (isNaN(inicioData.getTime()) || isNaN(fimData.getTime())) {
      res.status(400).json({ message: 'Datas inválidas' });
    } else if (fimData < inicioData) {
      res.status(400).json({ message: 'A data final deve ser posterior à data inicial' });
    } else {
      // Executa a consulta no banco de dados
      const response = await reserva.find({ data: { $gte: inicioData, $lte: fimData } }, (err, resultados) => {
        if (err) {
          console.error(err);
        } else {
          console.log(resultados);
        }
      });
      
      res.send(response.data);
    }
  }
};

exports.getoneReserva = async (req, res) => {   
  try {
    res.status(201).json(await reserva.reservaModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createReserva = async (req, res) => {   
    try {
      res.status(201).json(await reserva.reservaModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateReserva = async (req, res) => {   
    try {;
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.cancelaReserva = async (req, res) => {   
    try {;
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id, { status: 'C' } ));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

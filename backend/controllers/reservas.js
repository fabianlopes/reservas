const { now } = require('mongoose');
const reserva = require('../models/reservas')

// apenas para testes
exports.getReservas = async(req, res) => {

  const dataInicio = req.body.dataInicio;
  const dataFim = req.body.dataFim;
  const horaInicio = req.body.horaInicio;
  const horaFim = req.body.horaFim;
  const sala_numero = req.body.sala;
  const cliente_cpf = req.body.cliente;
  const funcionario_cpf = req.body.funcionario;
  const status_reserva = req.body.status;

  const consulta = {}
  
  if ( (dataInicio) || (dataFim) ) {
    // validar datas
    const inicioData = new Date(dataInicio);
    const fimData = new Date(dataFim);
    if (isNaN(inicioData.getTime()) || isNaN(fimData.getTime())) {
        res.status(400).json({ message: 'Datas inválidas' });}
    if (dataFim < dataInicio) {
        res.status(400).json({ message: 'A data final deve ser posterior à data inicial' });}
  
    consulta.data = { $gte: dataInicio, $lte: dataFim };
    }

  if ( (horaInicio) || (horaFim) ) {
    // validar horas
    if (isNaN(horaInicio) || isNaN(horaFim)) {
      res.status(400).json({ message: 'Horas inválidas' });}
    if (horaFim < horaInicio) {
      res.status(400).json({ message: 'A hora final deve ser posterior à hora inicial' });}  
    consulta.inicio = horaInicio;
    consulta.fim = horaFim;
  }

  if (sala_numero) {
    consulta.sala = sala_numero;
  }
  if (cliente_cpf) {
    consulta.cliente = cliente_cpf;
  }
  if (funcionario_cpf) {
    consulta.funcionario = funcionario_cpf;
  }
  if (status_reserva){
    consulta.status = status_reserva;
  }  

  try {
      const reservas = await reserva.reservaModel.find(consulta);
      res.json(reservas)
  }catch(error) {
      res.status(500).json({ message: error.message });

  }
}

exports.consultaDatasReservas = async (req, res) => {   
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
      try {
        res.status(201).json(await reserva.reservaModel.find({ data: { $gte: inicioData, $lte: fimData } }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }

    }
  };

exports.consultaSalasReservas = async (req, res) => {   
  const sala_numero = req.body.sala;

  // Verifica se os parâmetros estão presentes
  if (!sala_numero) {
    res.status(400).json({ message: 'Parâmetro inválido' });
  } else {

      // Executa a consulta no banco de dados      
      //const sala_numero = new String(sala_reserva);
      console.log('sala param ' + + sala_numero);
      try {
        res.status(201).json(await reserva.reservaModel.find({ sala: sala_numero }));
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };


exports.getOneReserva = async (req, res) => {   
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
    try {
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.cancelaReserva = async (req, res) => {   
    try {
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id, { status: 'C' } ));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.getNumeroReserva = async (req, res) => {   
    try {
      //res.status(201).json(await reserva.reservaModel.nextValue('numero'));
      res.status(201).json(await reserva.reservaModel.nextCount);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

exports.disponivelReserva = async (req, res, idSala, dataReserva, horaReserva) => {   

  const consulta = {}
  const dataReservada = new Date(now);

  if (dataReserva) {
    // validar data
    const dataReservada = new Date(dataReserva);    
    if (isNaN(dataReservada.getTime())) {
        res.status(400).json({ message: 'Data inválida' });
      }
    }
  if (horaReserva) {
    // validar hora
    if (isNaN(horaReserva)) {
      res.status(400).json({ message: 'Hora inválida' });
    }
  }
  
  consulta.data = dataReservada;
  consulta.sala = idSala;
  consulta.inicio = { $gte: horaReserva };
  consulta.fim = { $lte: horaReserva };

    try {
      res.status(201).json(await reserva.reservaModel.findByIdAndUpdate(req.params.id, { status: 'C' } ));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

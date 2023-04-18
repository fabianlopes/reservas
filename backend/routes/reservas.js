var express = require('express');
var router = express.Router();
var reservaController = require('../controllers/reservas');
var seqController = require('../controllers/seq');

//consultar reservas teste
router.get('/', reservaController.getReservas);
// buscar novo numero de reserva
router.get('/novonumero', reservaController.getNumeroReserva);
//consultar reservas em um perido
router.get('/consultadatas/', reservaController.consultaDatasReservas);
//consultar salas com reservas
router.get('/consultasalas/', reservaController.consultaSalasReservas);
// sala disponivel
router.get('/disponivel', reservaController.disponivelReserva);
// criar a reserva
router.post('/', reservaController.createReserva);
// alterar sala ou periodo da reserva
router.put('/:id', reservaController.updateReserva);
// busca uma reserva 
router.get('/:id', reservaController.getOneReserva);
// cancelar a reserva
router.put('/cancelar/:id', reservaController.cancelaReserva);

// criar a reserva
router.post('/seq', seqController.seq);


module.exports = router;
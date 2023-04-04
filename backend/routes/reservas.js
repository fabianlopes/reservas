var express = require('express');
var router = express.Router();
var reservaController = require('../controllers/reservas');

//consultar reservas teste
router.get('/', reservaController.getReservas);
//consultar reservas em um perido
router.get('/consulta/', reservaController.consultaReservas);
// criar a reserva
router.post('/', reservaController.createReserva);
// alterar sala ou periodo da reserva
router.put('/:id', reservaController.updateReserva);
// ver disponibilidade de sala e data para reserva
//router.get('/disponivel/:id', reservaController.disponivelReserva);
// cancelar a reserva
router.put('/cancelar/:id', reservaController.cancelarReserva);


module.exports = router;
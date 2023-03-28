var express = require('express');
var router = express.Router();
var funcionarioController = require('../controllers/funcionarios.js');

router.get('/', funcionarioController.getFuncionarios);
router.post('/', funcionarioController.createFuncionario);
router.get('/:id', funcionarioController.getoneFuncionario);
router.put('/:id', funcionarioController.updateFuncionario);
router.delete('/:id', funcionarioController.deleteFuncionario);


module.exports = router;
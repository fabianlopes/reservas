var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET index. */ 
router.get('/', async (req, res, next) => {
  try {    
    res.render('index', { title: 'Index'});
  } catch (err) {
    next(err);
  }
})

/* GET funcionarios. */ 
router.get('/funcionarios', async (req, res, next) => {
  try {
    const funcionarios = await db.findAll('funcionarios');
    res.render('funcionarios', { title: 'Funcionarios', funcionarios });
  } catch (err) {
    next(err);
  }
})

/* API get funcionarios. */ 
router.get('/api/funcionarios', async (req, res, next) => {
  try {    
    res.send(await db.findAll('funcionarios'));    
  } catch (err) {
    next(err);
  }
})

/* API get clientes. */ 
router.get('/api/clientes', async (req, res, next) => {
  try {    
    res.send(await db.findAll('clientes'));    
  } catch (err) {
    next(err);
  }
})


/* GET clientes. */ 
router.get('/clientes', async (req, res, next) => {
  try {
    const clientes = await db.findAll('clientes');
    res.render('clientes', { title: 'Clientes', clientes });
  } catch (err) {
    next(err);
  }
})

// POST clientes. */
router.post('/clientes', async (req, res, next) => {
  try {

      const resultado = await db.insertDb('clientes',req.body);
      res.redirect('/clientes');
      
  } catch (err) { 
    next(err);
   }
})

// DEL clientes. */
router.get('/clientes/delete/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await db.deleteDb('clientes',id);
    res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
})

router.get('/clientes/editar/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const clientes = await db.findOne('clientes',id);
    console.log('clientes' + clientes.cpf + ' tipo ' + typeof clientes);
    res.render('clientes', { title: 'Clientes', clientes, action: '/editar/' + clientes._id });
    //res.redirect('/clientes', clientes); 
  } catch (err) {
    next(err);
  }
})
/*
router.get('/tecnicas/:id', async (req, res, next) => {
  const id = req.params.id; 
  try {
    const tecnica = await db.findOne(id);
    res.render('tecnicas', { title: 'Técnicas de Avaliacao de DX', tecnica });
  } catch (err) {
    next(err);
  }
})*/

module.exports = router;

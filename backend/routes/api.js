var express = require('express');
var router = express.Router();
var db = require('../db')

/* API get salas. */ 
router.get('/salas', async (req, res, next) => {
  try {    
    res.send(await db.findAll('salas'));    
  } catch (err) {
    next(err);
  }
})

// API get sala unica. */
router.get('/salas/:id', async (req, res, next) => {
  const id = req.params.id;
  
  try {
    res.send(await db.findOne('salas',id));
  } catch (err) {
    next(err);
  }
  })

// POST salas. */
router.post('/salas', async (req, res, next) => {
try {  
    res.send(await db.insertDb('salas',req.body));        
} catch (err) { 
  next(err);
 }
})

// PUT salas. */
router.put('/salas/:id', async (req, res, next) => {
const id = req.params.id;

try {
  res.send(await db.updateDb('salas',id, req.body));
} catch (err) {
  next(err);
}
})

// DEL salas. */
router.delete('/salas/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    res.send(await db.deleteDb('salas',id));
  } catch (err) {
    next(err);
  }
})


  /* API get clientes. */ 
  router.get('/clientes', async (req, res, next) => {
    try {    
      res.send(await db.findAll('clientes'));    
    } catch (err) {
      next(err);
    }
  })

  /* API get salas. */ 
  router.get('/salas', async (req, res, next) => {
    try {    
      res.send(await db.findAll('salas'));    
    } catch (err) {
      next(err);
    }
  })

  // API get sala unica. */
  router.get('/salas/:id', async (req, res, next) => {
    const id = req.params.id;
  
    try {
      res.send(await db.findOne('salas',id));
    } catch (err) {
      next(err);
    }
  })

// POST clientes. */
router.post('/clientes', async (req, res, next) => {
  try {  
      res.send(await db.insertDb('clientes',req.body));        
  } catch (err) { 
    next(err);
   }
})

  


  
  // DEL clientes. */
  router.delete('/clientes/:id', async (req, res, next) => {
    const id = req.params.id;
  
    try {
      res.send(await db.deleteDb('clientes',id));
    } catch (err) {
      next(err);
    }
  })

  /* API get funcionarios. */ 
router.get('/funcionarios', async (req, res, next) => {
  try {    
    res.send(await db.findAll('funcionarios'));    
  } catch (err) {
    next(err);
  }
})

module.exports = router;
  /*
app.post('/clientes', async (req, res) => {
      await db.insertDb('clientes',req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json(result.ops[0]);
      }
    });
  });
  
  app.get('/clientes', async (req, res) => {
      await db.findAll('clientes',(err, clientes) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(clientes);
      }
    });
  });
  
  app.get('/api/clientes/:id', async (req, res) => {    
    const id = req.params.id;
    await db.findOne('clientes',id, (err, clientes) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (!tecnica) {
        res.status(404).json({ error: 'Cliente não encontrado' });
      } else {
        res.status(200).json(clientes);
      }
    });
  });
  
  app.put('/tecnicas/:id', (req, res) => {
    const collection = db.collection('mymodels');
    const id = req.params.id;
    collection.updateOne({ _id: new ObjectID(id) }, { $set: req.body }, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (result.matchedCount === 0) {
        res.status(404).json({ error: 'Modelo não encontrado' });
      } else {
        res.status(200).json({ message: 'Modelo atualizado com sucesso' });
      }
    });
  });
  
  app.delete('/tecnicas/:id', (req, res) => {
    const collection = db.collection('tecnicas');
    const id = req.params.id;
    collection.deleteOne({ _id: new ObjectID(id) }, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (result.deletedCount === 1) {res.status(200).json({ message: 'Modelo atualizado com sucesso' });
    }
  });
});*/
  
  
  
  
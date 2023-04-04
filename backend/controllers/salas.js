const sala = require('../models/salas.js')

exports.getSalas = async(req, res) => {
    try {
        const salas = await sala.SalaModel.find();
        res.json(salas)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneSala = async (req, res) => {   
  try {;
    res.status(201).json(await sala.SalaModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createSala = async (req, res) => {   
    try {;
      res.status(201).json(await sala.SalaModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateSala = async (req, res) => {   
    try {;
      res.status(201).json(await sala.SalaModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteSala = async (req, res) => {   
    try {;
      res.status(201).json(await sala.SalaModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

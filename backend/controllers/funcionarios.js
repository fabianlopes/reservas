const Funcionario = require('../models/funcionarios.js')

exports.getFuncionarios = async(req, res) => {
    try {
        const Funcionarios = await Funcionario.FuncionarioModel.find();
        res.json(Funcionarios)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneFuncionario = async (req, res) => {   
  try {;
    res.status(201).json(await Funcionario.FuncionarioModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await Funcionario.FuncionarioModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await Funcionario.FuncionarioModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await Funcionario.FuncionarioModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

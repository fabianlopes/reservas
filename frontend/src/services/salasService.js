import axios from 'axios';

var salasService = {
  getSalas: async () => {
    const response = await axios.get('http://localhost:5000/salas');

    return response;
  },
  getOneSalas: async (id) => {
    const response = await axios.get('http://localhost:5000/salas/'+ id);

    return response;
  },
  deleteSalas: async (id) => {
    const response = await axios.delete('http://localhost:5000/salas/'+ id);

    return response;
  },
  createSalas: async (sala) => {
    const response = await axios.post('http://localhost:5000/salas/',sala);

    return response;
  },
  updateSalas: async (id,sala) => {
    const response = await axios.put('http://localhost:5000/salas/'+id,sala);

    return response;
  },
};

export default salasService;
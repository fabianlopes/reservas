import axios from 'axios';

var reservasService = {
  getReservas: async () => {
    const response = await axios.get('http://localhost:5000/reservas');

    return response;
  },
  getOneReservas: async (id) => {
    const response = await axios.get('http://localhost:5000/reservas/'+ id);

    return response;
  },
  deleteReservas: async (id) => {
    const response = await axios.delete('http://localhost:5000/reservas/'+ id);

    return response;
  },
  createReservas: async (sala) => {
    const response = await axios.post('http://localhost:5000/reservas/',sala);

    return response;
  },
  updateReservas: async (id,sala) => {
    const response = await axios.put('http://localhost:5000/reservas/'+id,sala);

    return response;
  },
};

export default reservasService;
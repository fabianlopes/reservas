import axios from 'axios';

var reservasService = {
  getreservas: async () => {
    const response = await axios.get('http://localhost:5000/reservas');

    return response;
  },
  getOnereservas: async (id) => {
    const response = await axios.get('http://localhost:5000/reservas/'+ id);

    return response;
  },
  deletereservas: async (id) => {
    const response = await axios.delete('http://localhost:5000/reservas/'+ id);

    return response;
  },
  createreservas: async (sala) => {
    const response = await axios.post('http://localhost:5000/reservas/',sala);

    return response;
  },
  updatereservas: async (id,sala) => {
    const response = await axios.put('http://localhost:5000/reservas/'+id,sala);

    return response;
  },
};

export default reservasService;
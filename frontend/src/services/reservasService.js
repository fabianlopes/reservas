import axios from 'axios';
import salasService from './salasService';

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
  createReservas: async (reserva) => {
    const response = await axios.post('http://localhost:5000/reservas/',reserva);

    return response;
  },
  updateReservas: async (id,reserva) => {
    const response = await axios.put('http://localhost:5000/reservas/'+id,reserva);

    return response;
  },
  calculaValorReservas: async (idSala,horaInicio, horaFim) => {

    const response = await salasService.getOneSalas(idSala);    
    const valorTotal = response.data.valor * (horaFim - horaInicio);

    return valorTotal;
  },

  getNumeroReservas: async () => {
    const response = await axios.get('http://localhost:5000/reservas/novonumero');

    return response;
  }
};

export default reservasService;
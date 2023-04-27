import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import salasService from '../services/salasService';
import reservasService from '../services/reservasService';
import clientesService from '../services/clientesService';
import ComboSalas from '../componentes/combosalas';

function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedSala, setSelectedSala] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [cpfCliente, setcpfCliente] = useState('');


  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
       
          const responseReserva = await reservasService.getOneReservas(id);
          setFormData(responseReserva.data);

          const responseSala = await salasService.getOneSalas(responseReserva.data.sala);
          setSelectedSala(responseSala.data.numero);

          const responseCliente = await clientesService.getOneClientes(responseReserva.data.cliente);
          setcpfCliente(responseCliente.data.cpf);

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {        
        
        if (event.nativeEvent.submitter.name === "salvar") {

          // deve vir como parametro se for WEB ou Local
          reserva.funcionario = 'WEB - Internet'; // funcionario WEB
          reserva.cliente = 'Internet - WWW'; // cliente temporario
          reserva.status = 'R'; // indicar sala reservada
          // valor calculado
          reserva.valortotal = await reservasService.calculaValorReservas(reserva.sala, reserva.inicio, reserva.fim);
          reserva.cpf = this.clienteButton(reserva.cpf);

          alert(reserva.numero);
                    
          if (id === 'inserir') {              
              await reservasService.createReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await reservasService.updateReservas(id,reserva);
              alert('alterado com sucesso!');
              
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...reserva, [name]: value });
    };    

    const handleCPFChange = (event) => {
      setcpfCliente(event.target.value);
    };  

    const handleSelectSalaChange = (value) => {
      setSelectedSala(value);
    };    

    const clienteButton = async () => {
      const cpfBanco = await clientesService.getOneClientesCPF(cpfCliente);
      console.log(cpfBanco);
      setNomeCliente(cpfBanco.nome);
    };    
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>          
          
          <Form.Label style={{ display: "none" }}>Sala: </Form.Label>
          <Form.Control style={{ display: "none" }} name='sala' type="text" value={selectedSala} readOnly />

          <ComboSalas onSelectChange={handleSelectSalaChange} />
          
          <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" name="numero" value={reserva.numero} readOnly/>
          <Form.Label>Data:</Form.Label>
          <Form.Control type="date" name="data" value={reserva.data} onChange={handleChange}/>
          <Form.Label>Hora inicio:</Form.Label>
          <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
          <Form.Label>Hora fim:</Form.Label>
          <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>          
          <Form.Label>Valor:</Form.Label>
          <Form.Control type="number" name="valor" value={reserva.valor} onChange={handleChange}/>
          <Form.Label>Observação:</Form.Label>
          <Form.Control type="text" name="observacao" value={reserva.observacao} onChange={handleChange}/>
          <Form.Group>
            <Form.Label>CPF do Cliente: </Form.Label>
            <Form.Control type="number" name="cpf" value={cpfCliente} onChange={handleCPFChange}/>
            <Form.Label>Nome: {nomeCliente}</Form.Label>
            <Button onClick={clienteButton}>Clientes</Button>
          </Form.Group>
          <Button variant="primary" type="submit" name="salvar">
            Salvar
          </Button>
          <Button variant="primary" type="submit" name="cancelar">
            Cancelar
          </Button>
        </Form>        
      </Row>        
      
        <Row>          
          <Rodape/>
        </Row>    

    </Container>
  );
}

export default Reservas;
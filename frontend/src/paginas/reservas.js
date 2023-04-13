import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import ComboSalas from '../componentes/combosalas';

function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');

  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {

        if (id !== 'inserir') {
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);
        }

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
          reserva.valortotal = reservasService.calculaValorReservas(reserva.sala, reserva.inicio, reserva.fim); 
                    
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

    const handleSelectChange = (value) => {
      setSelectedValue(value);      
      reserva.sala = value;
    };    
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>          
          
          <Form.Label>Valor select</Form.Label>
          <Form.Control name='sala' type="text" value={selectedValue} readOnly />

          <ComboSalas onSelectChange={handleSelectChange} />
          
          <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" name="numero" value={reserva.numero} onChange={handleChange}/>
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
import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import ComboSalas from '../componentes/combosalas';
import salasService from '../services/salasService';


function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectData, setSelectData] = useState([]);

  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {

        const responseSala = await salasService.getSalas();
        setSelectData(responseSala.data);
        
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);

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
          alert(id);
          alert(reserva.sala);
          reserva.funcionario = 'WEB - Internet';
          reserva.funcionario = 'Internet - WWW';
          reserva.status = 'R'; // indicar sala reservada
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

    const handleSelect = (event) => {
      event.preventDefault()
      const value = event.target.value;
      setSelectData(value);
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>

          <ComboSalas value={reserva.sala} onSelect={handleChange}/>

          <Form.Label>Selecione uma sala</Form.Label>
          <Form.Control as="select" name='sala' value={selectData}>
              {selectData.map(item => (
                <option key={item._id} value={item._id} onChange={handleSelect}>
                  {item.numero} - {item.tipo} - {item.descricao}
                </option>
              ))}
          </Form.Control>

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
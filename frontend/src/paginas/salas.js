import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import salasService from '../services/salasService';



function Salas() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        
        const response = await salasService.getOneSalas(id);
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
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (typeof id === 'undefined') {
              
              await salasService.createSalas(sala);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await salasService.updateSalas(id,sala);
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
      setFormData({ ...sala, [name]: value });
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>
          <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" name="numero" value={sala.numero} onChange={handleChange}/>
          <Form.Label>Tipo:</Form.Label>
          <Form.Control type="text" name="tipo" value={sala.tipo} onChange={handleChange}/>
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control type="text" name="capacidade" value={sala.capacidade} onChange={handleChange}/>
          <Form.Label>Valor:</Form.Label>
          <Form.Control type="text" name="valor" value={sala.valor} onChange={handleChange}/>
          <Form.Label>Descrição:</Form.Label>
          <Form.Control type="text" name="descricao" value={sala.descricao} onChange={handleChange}/>
          
          
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

export default Salas;
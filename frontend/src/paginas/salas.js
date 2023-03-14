import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';


function Salas() {
  
  const [formData, setFormData] = useState([]);
  
  useEffect(() => {
      async function fetchFormData ({id}) {
      
      try {
        
        const response = await axios.get('http://localhost:5000/api/salas/${id}');
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[]); 
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Numero</Form.Label>
        <Form.Control type="input" placeholder="Numero" />
        <Form.Text className="text-muted">
          Número da sala.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  "numero": "1",
  "tipo": "1",
  "capacidade": "100",
  "valor": "150",
  "imagem": "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/3fd47363a5e86a62265a0196a4b6980d/conjunto-comercial-sala-para-alugar-92m-no-centro-historico-porto-alegre.jpg",
  "descricao": "a"

      
      </Row>        
      
        <Row>
            <Col xs={12}>
                <p>Developer by FL</p>
            </Col>
        </Row>    

    </Container>
  );
}

export default Salas;
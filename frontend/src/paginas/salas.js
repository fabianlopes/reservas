import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';


function Salas() {
  
  const { id } = useParams();
  const [sala, setFormData] = useState([]);
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        
        console.log('id =' + id);
        const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
        setFormData(response.data);      
        console.log('response ' + response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <form action="<%= action %>" method="POST">
          <p>Numero:<input type="text" name="numero" value={sala.numero} /></p>
          <p>Tipo:<input type="text" name="tipo" value={sala.tipo} /></p>
          <p>Capacidade:<input type="text" name="capacidade" value={sala.capacidade} /></p>
          <p>Valor:<input type="text" name="valor" value={sala.valor} /></p>
          <p>Imagem:<input type="text" name="imagem" value={sala.imagem} /></p>
          <p>Descrição:<input type="text" name="descricao" value={sala.descricao} /></p>
          <input type="submit" value="Salvar" />
        </form>
        <img src={sala.imagem} alt="imagem banco"></img>
     
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
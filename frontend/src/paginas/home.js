import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Carrossel from '../componentes/carrossel' 
//import Netflix from './netflix';
function Home() {
  return (
    
    <Container fluid>

      <Row>
        <Cabecalho/>
      </Row>
      <Row>
        <Carrossel/>
      </Row>
      
      
    </Container>

      )
      };

export default Home;


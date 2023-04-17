import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Index() {
  return (
    
    <Container fluid>
        <Row>
          <Cabecalho/>
        </Row>
        <Row>
          <Link to="/listasalas">
            Salas
          </Link>
        </Row>
        <Row>
          <Rodape/>
        </Row>
    
    </Container>

      )
      };

export default Index;


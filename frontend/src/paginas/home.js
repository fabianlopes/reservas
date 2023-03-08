import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';

function Home() {
  return (
    
    <Container>


      <Cabecalho/>
      
      <Link to="/clientes">
        Clientes
      </Link>
      <Link to="/funcionarios">
        Funcionarios
      </Link>

    </Container>

      )
      };

export default Home;


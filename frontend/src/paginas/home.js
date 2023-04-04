import React from 'react';
import { Container } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Carrossel from '../componentes/carrossel' 
import Rodape from '../componentes/rodape';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { FaSearch, FaBell, FaGift } from 'react-icons/fa';



function Home() {
  return (
    
    <Container fluid>

        <Cabecalho/>
        <Carrossel/>
        <Rodape/>
    
    </Container>

      )
      };

export default Home;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Salas from './paginas/salas';
import Home from './paginas/home';
import ListaSalas from './paginas/listasalas';
import Index from './paginas';
import Reservas from './paginas/reservas';
import ControleReservas from './paginas/controlereservas';

function App() {
  return (
    
    <Container>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/salas/" element={<Salas/>} />
          <Route path="/salas/:id" element={<Salas/>} />
          <Route path="/listaSalas" element={<ListaSalas/>} />
          <Route path="/reservas" element={<Reservas/>} />
          <Route path="/reservas/:id" element={<Reservas/>} />
          <Route path="/controlereservas/" element={<ControleReservas/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;

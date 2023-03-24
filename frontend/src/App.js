import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Salas from './componentes/salas';
import Home from './paginas/home';
import ListaSalas from './paginas/listasalas';
import Index from './paginas';

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
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Salas from './paginas/salas';
import Home from './paginas/home';

function App() {
  return (
    
    <Container>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/salas" element={<Salas/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;

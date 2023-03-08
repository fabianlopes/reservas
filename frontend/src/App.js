import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Clientes from './paginas/clientes';
import Home from './paginas/home';

function App() {
  return (
    
    <Container>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;

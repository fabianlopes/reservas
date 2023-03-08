import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Clientes from './paginas/clientes';

function App() {
  return (
    
    <Container>

      <Link to="/clientes">
        Clientes
      </Link>
      <Link to="/funcionarios">
        Funcionarios
      </Link>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Clientes/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Modal, Button, Table } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import clientesService from '../services/clientesService';
import salasService from '../services/salasService';
import reservasService from '../services/reservasService';



function ControleReservas() {
  
  const [formData, setFormData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectCliente, setOptionsCliente] = useState([]);
  const [selectedOptionCliente, setSelectedOptionCliente] = useState(null);
  const [selectSala, setOptionsSala] = useState([]);
  const [selectedOptionSala, setSelectedOptionSala] = useState(null);

  useEffect((req, res) => {
    async function fetchTableData () {
    
    try {
    
        const reservas = await reservasService.getReservas;
        setTableData(reservas.data);
        const selectSala = await salasService.getSalas();
        setOptionsSala(selectSala.data);
        const selectCliente = await clientesService.getSalas();
        setOptionsCliente(selectCliente.data);        

    } catch (error) {
        console.error(error);
    }

  };
  fetchTableData();
},[formData]); 

    const handleClienteChange = (selected) => {    
    setSelectedOptionCliente(selected);
  };
  
  const handleSalaChange = (selected) => {    
    setSelectedOptionSala(selected);
  };

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...sala, [name]: value });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tableData);
    console.log(formData);
    
  }


  return (

    <Container fluid>
      <Row>
          <Cabecalho />        
      </Row>
      <Row>
        <Col xs='4'>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="clienteSelect">
              <Form.Label>Cliente: </Form.Label>
              <Form.Control
                as="select"
                name="cliente"
                value={selectedOptionCliente}
                onChange={handleClienteChange}
              >
                {selectCliente.map((row, index) => {
                    return (
                    <option  key={index}>
                        {row.numero} - {row.descricao} - {row.capacidade}
                    </option>
                    );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="data">
              <Form.Label>Data reserva:</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={formData.selectedDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inicio">
              <Form.Label>Hota Início:</Form.Label>
              <Form.Control
                type="number"
                name="inicio"
                value={formData.inicio}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="fim">
              <Form.Label>Fim Início:</Form.Label>
              <Form.Control
                type="number"
                name="fim"
                value={formData.inicio}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="salaSelect">
              <Form.Label>Sala: </Form.Label>
              <Form.Control
                as="select"
                name="sala"
                value={selectedOptionSala}
                onChange={handleSalaChange}
              >
                {selectSala.map((row, index) => {
                    return (
                    <option  key={index}>
                        {row.numero} - {row.descricao} - {row.capacidade}
                    </option>
                    );
                })}
              </Form.Control>
            </Form.Group>
            <Button type="submit">Fechar</Button>
          </Form>
        </Col>
        <Col xs='8'>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nro Reserva</th>
                    <th>Sala</th>
                    <th>Capaciade</th>
                    <th>Periodo</th>
                    <th>Status</th>     
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => {
                    return (
                    <tr key={index}>
                        <td>{row.numero}</td>
                        <td>{row.sala}</td>
                        <td>{row.data}</td>
                        <td>{row.inicio} - {row.fim}</td>
                        <td>{row.status}</td>
                    </tr>
                    );
                })}
                </tbody>
            </Table>
                
        </Col>
          
      </Row>
      
    </Container>
  );
}

export default ControleReservas;
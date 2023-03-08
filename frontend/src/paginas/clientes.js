import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';


function Clientes() {
  
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();    
    
    const searchTerm = {tags:event.target.search.value};
    console.log('Pesquisar por:', searchTerm);
    
    const fetchTableData = async () => {
        
        try {
          
          const response = await axios( {
            method: 'post',
            url: 'http://localhost:5000/api/clientes',
            headers: {
              'Content-Type': 'application/json'
            },
            data: searchTerm
    
        });
        setTableData(response.data);   
        } catch (error) {
          console.error(error);
        }
    
        }
    fetchTableData();
    };
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>
      <Row>

        <Form onSubmit={handleSubmit} className="form-container">
                <FormControl
                type="text"
                placeholder="Pesquisar"
                name='search'
                />
                <Button variant="outline-success" type="submit">Pesquisar</Button>
        </Form>

      </Row>
      <Row>            

                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Clientes</h2>
                    </div>
                    <table className='striped bordered hover'>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.cep}>
                                <td>{row.cpf}</td>
                                <td>{row.nome}</td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>

      </Row>        
      
        <Row className="bg-dark text-white">
            <Col xs={12}>
                <p>Developer by FL</p>
            </Col>
        </Row>    

    </Container>
  );
}

export default Clientes;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';


function Clientes() {
  
  const [tableData, setTableData] = useState([]);

    useEffect(() => {
      const fetchTableData = async () => {
      
      try {
        
        useEffect(() => {
          api
            .get("/users/romulo27")
            .then((response) => setUser(response.data))
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
        }, []);
         
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    }); 
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
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
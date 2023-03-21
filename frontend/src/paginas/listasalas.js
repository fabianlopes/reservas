import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ListaSalas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/api/salas');
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[]); 
    
    async function handleDelete(id) {
      try {
             await axios.delete(`http://localhost:5000/api/salas/${id}`);
            alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }      
    }
  
  return (    

    <Container fluid>
      <Row>
        
        <Cabecalho />
        
      </Row>
     
      <Row>
        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Salas</h2>
                    </div>
                    <table className='striped bordered hover'>
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>Tipo</th>
                                <th>Descricao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.cep}>
                                <td>{row.numero}</td>
                                <td>{row.tipo}</td>
                                <td>{row.descricao}</td>
                                <td>
                                  <Link to={`/salas/${row._id}`} >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={handleDelete(row._id)}
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>

      </Row>        
      
        <Row>
        <Rodape/>
          <Link to="/salas/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row>    

    </Container>
  );
}

export default ListaSalas;
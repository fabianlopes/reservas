import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Image, Modal } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import funcionariosService from '../services/funcionariosService';

function ListaFuncionarios() {
  
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  
  useEffect((req, res) => {
      async function fetchTableData () {
      
      try {

        const response = await funcionariosService.getFuncionarios();
        setTableData(response.data);
        
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[tableData]); 

    const handleCancel = () => {
      setShowModal(false); // fechar o modal
    };

    async function handleDelete(id) {
          try {
                await funcionariosService.deleteFuncionarios(id);
                alert('deletado com sucesso!');
                this.fetchTableData();
          } catch (error) {
            console.error(error);
          }
          setShowModal(false);
           
    }
  
  return (    

    <Container fluid>
      <Row>        
        <Cabecalho />        
      </Row>     
      <Row>        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>funcionarios</h2>
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
                                  <Link to={`/funcionarios/${row._id}`} >
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
                                      onClick={() => setShowModal(true)}
                                    />

                                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Confirmação</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        Tem certeza que deseja confirmar?
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCancel}>
                                          Cancelar
                                        </Button>
                                        <Button variant="primary" onClick={() => handleDelete(row._id)}>
                                          Confirmar
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                    
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
          <Link to="/funcionarios/">
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

export default ListaFuncionarios;
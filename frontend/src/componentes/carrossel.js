import {React, useState, useEffect} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Cabecalho from './cabecalho';

function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/api/salas');
        setCarrosselData(response.data);
        console.log('data' + carrosselData);
        console.log('response' + response);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchCarrosselData();
    },[carrosselData]);

    return (
      
        <Container fluid>

        <Row>
        
            <Cabecalho />
        
        </Row>
        <Row>

        <Card>            
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <Carousel>        
                        {carrosselData.map((item, index) => (
                        <Carousel.Item key={item.id}><img key={index} src={item.imagem} alt="" /></Carousel.Item>
                        ))}
                    </Carousel>
                   
                </Card.Text>          
            </Card.Body>
        </Card>

        </Row>

        </Container>

    );
  }
  
  export default Carrossel;
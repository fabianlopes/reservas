import React, {useState, useEffect} from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import salasService from '../services/salasService';

function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        const response = await salasService.getSalas();
        setCarrosselData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchCarrosselData();
    },[carrosselData]);

    return (
      
        <Container fluid>
        
        <Card as='div'>            
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text as='div'>
                    <Carousel className='carousel'>                      
                        {carrosselData.map((item, index) => (
                          
                        <Carousel.Item className='carousel-item' key={item._id}>
                          <Link to={`/salas/${item._id}`} >
                            <img key={index} src={item.imagem} alt={item.numero} />                            
                            {item._id}
                          </Link>
                          <Link to='/salas'>
                          {item.numero}
                          </Link>
                        </Carousel.Item>
                       
                        ))}
                    </Carousel>
                   
                </Card.Text>
                <Link to='/reservas/inserir'>
                          <Button>Reserve aqui</Button>
                </Link>
                <Link to='/controlereservas/'>
                          <Button>Gerencia reservas</Button>
                </Link>
            </Card.Body>
        </Card>

      </Container>

    );
  }
  
  export default Carrossel;
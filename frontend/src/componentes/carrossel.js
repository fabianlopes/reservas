import {React, useState, useEffect} from 'react';
import { Carousel, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import '../css/carrossel.css';
import { Link } from 'react-router-dom';

function Carrossel() {

    const [carrosselData, setCarrosselData] = useState([]);
  
    useEffect(() => {
      async function fetchCarrosselData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/api/salas');
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
            </Card.Body>
        </Card>

      </Container>

    );
  }
  
  export default Carrossel;
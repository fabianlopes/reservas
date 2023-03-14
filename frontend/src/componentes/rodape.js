import React from 'react';
import { Col, Row, Nav, Container } from 'react-bootstrap';
//import { FaSearch, FaBell, FaGift } from 'react-icons/fa';

function Rodape() {
  
  return (

<footer>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3>Contact Us</h3>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
          </Col>
          <Col xs={12} md={6}>
            <h3>Links</h3>
            <Nav className="flex-column">
              <Nav.Link href="#">Link 1</Nav.Link>
              <Nav.Link href="#">Link 2</Nav.Link>
              <Nav.Link href="#">Link 3</Nav.Link>
              <Nav.Link href="#">Link 4</Nav.Link>
            </Nav>
          </Col> 
        </Row>
       </Container>
</footer>

);
}

export default Rodape;
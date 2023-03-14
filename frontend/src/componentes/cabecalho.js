import React from 'react';
import { Row, Col, Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaSearch, FaBell, FaGift } from 'react-icons/fa';

function Cabecalho() {
  
  return (

    <Container>
   

      <Col>
        <Image src='https://cdn-icons-png.flaticon.com/512/6896/6896424.png' alt='LOGO'/>
      </Col>

      <Col>

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/">Netflix</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/tv-shows">TV Shows</Nav.Link>
                  <Nav.Link href="/movies">Movies</Nav.Link>
                  <Nav.Link href="/latest">Latest</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/search">
                    <FaSearch />
                  </Nav.Link>
                  <Nav.Link href="/notifications">
                    <FaBell />
                  </Nav.Link>
                  <Nav.Link href="/gifts">
                    <FaGift />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

      </Col>

    

  </Container>
  );
}

export default Cabecalho;
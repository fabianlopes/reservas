import React from 'react';
import { Button, Navbar, Nav, Container} from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import { Link } from 'react-router-dom';


function Cabecalho() {
  
  return (

    <header>
      <Container fluid>
        
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">
                
              <img
              src='https://cdn-icons-png.flaticon.com/128/1329/1329398.png'
              height='40'
              alt=''
              loading='lazy'
            />

          <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: '40px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              ZBUCET Coworking
            </AnimatedText>
                                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contatos">Contatos</Nav.Link>
                    <Nav.Link href="/sobre">Sobre</Nav.Link>
                  </Nav>
                  <Link to="/index">
                    <Button variant="outline-primary">Intranet</Button>
                  </Link>
                </Navbar.Collapse>

            </Container>
          </Navbar>        
      </Container>
    </header>
    
  );
}

export default Cabecalho;
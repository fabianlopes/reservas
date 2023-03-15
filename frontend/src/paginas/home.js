import React from 'react';
import { Container } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Carrossel from '../componentes/carrossel' 
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaBell, FaGift } from 'react-icons/fa';



function Home() {
  return (
    
    <Container>

      <Cabecalho/>
      <Carrossel/>

    <Router>
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

      <Switch>
        <Route path="/" exact>
          <h1>Homepage</h1>
        </Route>
        <Route path="/tv-shows">
          <h1>TV Shows</h1>
        </Route>
        <Route path="/movies">
          <h1>Movies</h1>
        </Route>
        <Route path="/latest">
          <h1>Latest</h1>
        </Route>
      </Switch>
    </Router>

</Container>

      )
      };

export default Home;


import React from 'react';
import { Image, Button, Navbar, Nav, Container} from 'react-bootstrap';
import { FaSearch, FaBell, FaGift } from 'react-icons/fa';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import AnimatedText from 'react-animated-text-content';

function Cabecalho() {
  
  return (

    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn-icons-png.flaticon.com/128/1329/1329398.png'
              height='40'
              alt=''
              loading='lazy'
            />

            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: '200px',
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
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    
  );
}

export default Cabecalho;
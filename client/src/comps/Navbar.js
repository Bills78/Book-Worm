import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Navbar expand='xl' variant='dark'>
      <Container fluid='xl'>
        <Nav>
          <Navbar.Brand href='/'>~Book~Worm~</Navbar.Brand>
        </Nav>
        <Nav>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
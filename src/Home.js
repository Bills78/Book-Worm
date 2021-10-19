import React from 'react';
import AddBook from './comps/NewBook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
    <Container fluid="lg" className='add-book'>
      <AddBook />
    </Container>
    <Container fluid className='footer'>
      <Row>
        <Col></Col>
        <Col sm={6}><p>“It is said that in some countries trees will grow, but will bear no fruit because there is no winter there.”<br></br>
          ― John Bunyan</p></Col>
        <Col></Col>
      </Row>
    </Container>
    </>
  )
}

export default Home;
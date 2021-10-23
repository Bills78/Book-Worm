import React from 'react';
import AddBook from './comps/NewBook';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <>
    <Container fluid='lg' className='add-book'>
      <AddBook />
    </Container>
    </>
  );
};

export default Home;
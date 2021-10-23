import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProBar from './ProBar';
import PageUpdate from './PageUpdate'
import Container from 'react-bootstrap/esm/Container';

function Book(props) {
  const { books, onDelete, onUpdate, show, onHide, updatePage, onChange } = props;

  function _percent(pages, current) {
    const per = (current / pages) * 100;
    return Math.floor(per);
  }

  return (
    <Container className='books' fluid>
      {books.map((book) => {
          let className = 'is-unread';
          if (book.status === true) {
            className = 'is-read'
          }
          return (
            <div className={className}  key={book.id}>
              <Card>
                <Card.Header as="h5">{book.title}</Card.Header>
                <Card.Body>
                  <Card.Title>Written By: {book.author}</Card.Title>
                  <Card.Text>
                    # of Pages: {book.pages}
                  </Card.Text>
                  <Card.Text as="div">
                    Progress: <ProBar now={_percent(book.pages, book.current)} />
                  </Card.Text>
                  <div className='book-btns'>
                    <Button variant="primary" onClick={() => onDelete(book.id)}>Delete</Button>
                    <Button variant="primary" onClick={() => onUpdate()}>Update</Button>

                    <PageUpdate 
                      book={book}
                      show={show}
                      onHide={onHide}
                      onSubmit={updatePage}
                      onChange={onChange}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          )})}
      </Container>
    );
};

export default Book;
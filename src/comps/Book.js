import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProBar from './ProBar';
import PageUpdate from './PageUpdate'

function Book(props) {
  const { books, onDelete, onUpdate, show, onHide, updatePage, onChange } = props;

  function _percent(total, current) {
    const per = (current / total) * 100;
    return Math.floor(per);
  }

  return (
    <div className='books'>
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
                    <Button variant="danger" onClick={() => onDelete(book.id)}>Delete</Button>
                    <Button variant="success" onClick={() => onUpdate()}>Update</Button>

                    <PageUpdate 
                      book={book}
                      show={show}
                      onHide={onHide}
                      onSubmit={updatePage}
                      onChange={onChange}
                    />
                </Card.Body>
              </Card>
            </div>
          )})}
      </div>
    );
};

export default Book;
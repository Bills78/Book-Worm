import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PopUp(props) {
  const { HandleSubmitBook, handleChange, book, onHide } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Form onSubmit={HandleSubmitBook}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor="title" >Title: </Form.Label>
             <Form.Control
               onChange={handleChange}
               defaultValue={book.title}
               type="text" 
               name="title"
               required
            />
            <Form.Label htmlFor="author" >Author: </Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={book.author}
              type="text" 
              name="author"
              required
            />
            <Form.Label htmlFor="pages" ># of Pages: </Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={book.pages}
              type="number" 
              pattern="[0-9]*"
              name="pages"
              required
            />
            <Form.Label htmlFor="current" >Current Page: </Form.Label>
            <Form.Control
              onChange={handleChange}
              defaultValue={book.current}
              type="number" 
              pattern="[0-9]*"
              max={book.pages}
              name="current"
              required
            />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PopUp;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PageUpdate(props) {
  const { handleChange, book, onHide } = props

  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Form onSubmit={() => props.onSubmit(book.id)}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Group className="modal-content">
            <Form.Label htmlFor="current">Current Page: </Form.Label>
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
        <Button variant="primary" onClick={onHide}>Close</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PageUpdate;
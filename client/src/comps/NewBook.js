import { useEffect, useState, useHistory } from "react";
import Book from "./Book";
import uniqid from "uniqid";
import Button from "react-bootstrap/Button";
import PopUp from "./Modal";


function AddBook() {
  const [books, setBooks] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [book, setBook] = useState({
    title: '',
    author: '',
    pages: '',
    current: '',
    status: false,
    id: uniqid()
  });

    useEffect(() => {

      fetch('http://localhost:8000/books')
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch data... sorry...')
          };
          return res.json();
        })
        .then(data => {
          setBooks(data);
          setIsPending(false);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })

    }, [setBooks, setIsPending]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmitBook() {
    const newBook = book;
    fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook)
    });
    setBook({
      title: '',
      author: '',
      pages: '',
      current: '',
      status: false,
      id: uniqid()
    });
    setModalShow(false);
    };

    function deleteBook(bookId) {
      fetch(`http://localhost:8000/books/${bookId}`, {
        method: 'DELETE',
      }).then(fetch('http://localhost:8000/books')
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch data... sorry...')
            };
            return res.json();
          })
          .then(data => {
            setBooks(data);
            setIsPending(false);
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message);
          }))
    };

    function updatePage(bookId){
      const newCurrent = book.current;

      fetch(`http://localhost:8000/books/${bookId}`, {
        method:"PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
          {
            "current": newCurrent
          },
        ),
      });
    };

    return (
        <div>
        <Button variant="primary" onClick={() => {
          setModalShow(true);
          }}>
        Add A Book
        </Button>

        <PopUp 
          show={modalShow}
          onHide={() => setModalShow(false)}
          onChange={handleChange}
          onSubmit={handleSubmitBook}
          book={book}
        />
        
        { error && <div>{error}</div>}
        { isPending && <div>Loading...</div>}
        { books && <Book
          books={books}
          onDelete={deleteBook}
          onUpdate={() => setShowUpdate(true)}
          show={showUpdate}
          onHide={() => setShowUpdate(false)}
          updatePage={updatePage}
          onChange={handleChange}
        />}
      </div>
    );
  };

export default AddBook;
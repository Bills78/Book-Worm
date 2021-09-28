import React from "react";
import Book from "./Book";
import Popup from "reactjs-popup";
import uniqid from "uniqid";


class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: '',
        author: '',
        pages: '',
        current: '',
        status: false,
        id: uniqid()
      },
      books: [],
    };
    
    this.changeStatus = this.changeStatus.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitBook = this.onSubmitBook.bind(this);
  }

  onSubmitBook = (e) => {
    e.preventDefault();
    this.setState({
      books: this.state.books.concat(this.state.book),
      book: {
        title: '',
        author: '',
        pages: '',
        current: '',
        status: false,
        id: uniqid()
      },
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      book: {
        ...this.state.book,
        [name]: value
      }
    });
  };

  handleDelete = (bookId) => {
    const books = this.state.books.filter(book => book.id !== bookId);
    this.setState({books: books});
  };
 
  changeStatus = (bookId) => {
    const { books } = this.state;
    const i = books.findIndex(book => book.id === bookId);
    let book = books[i]
    let complete = book.status === false ? true : false;
    book.status = complete
    books[i] = book;
    this.setState({books})
    console.log(book.status);
  }

  render() {
    const { book, books } = this.state;

    return (
      <div>
      <Popup 
        trigger={<button>Add A Book</button>}
        modal
        >
        {close => (
        <form onSubmit={this.onSubmitBook}>
          <h2>Add A Book</h2>
            <label htmlFor="title" >Title: </label>
              <input
                onChange={this.handleChange}
                value={book.title}
                type="text" 
                name="title"
                required
                 />
            <label htmlFor="author" >Author: </label>
              <input
                onChange={this.handleChange}
                value={book.author}
                type="text" 
                name="author"
                required
                 />
            <label htmlFor="pages" ># of Pages: </label>
              <input
                onChange={this.handleChange}
                value={book.pages}
                type="text" 
                name="pages"
                required
                 />
            <label htmlFor="current" >Current: </label>
              <input
                onChange={this.handleChange}
                value={book.current}
                type="text" 
                name="current"
                required
                 />
            <div className="btns">
            <button type="submit">Add Book</button>
            <button type="button" onClick={close}>Close</button>
            </div>
          </form>
          )}
        </Popup>
        <Book  
          books={books} 
          onDelete={this.handleDelete}
          onComplete={this.changeStatus}
          />
      </div>
    )
  }
}

export default AddBook;
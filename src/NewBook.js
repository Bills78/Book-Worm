import React from "react";
import uniqid from "uniqid";
import Book from "./Book";

class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: '',
        author: '',
        pages: '',
        current: '',
        id: uniqid()
      },
      books: [],
    };
    
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
        id: uniqid()
      },
    });
  };

  handleChange = (e) => {
    this.setState({
      book: {
        [e.target.name]: e.target.value,
        id: this.state.book.id
      }
    });
  };


  render() {
    const { book, books } = this.state;

    return (
      <div className="addBook">
        <form onSubmit={this.onSubmitBook}>
          <h2>Add A Book</h2>
          <label htmlFor="bookTitle">Title: </label>
          <input
            onChange={this.handleChange}
            value={book.title}
            type="text" 
            name="title"
             />
          <label htmlFor="bookAuthor">Author: </label>
          <input
            onChange={this.handleChange}
            value={book.author} 
            type="text" 
            name="author"
             />
          <label htmlFor="bookPages"># of Pages: </label>
          <input
            onChange={this.handleChange}
            value={book.pages} 
            type="text" 
            name="pages"
             />
          <label htmlFor="bookCurrent">Current Page: </label>
          <input
            onChange={this.handleChange}
            value={book.current} 
            type="text" 
            name="current"
            />
            <button type="submit">Add Book</button>
        </form>
        <Book books={books} />
      </div>
    )
  }
}

export default AddBook;
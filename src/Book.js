import React from "react";

const Book = (props) => {
  const { books } = props;

  return (
    <div className='books'>
      {books.map((book) => {
        return <div className='book' key={book.id}>
          <h2>Title: {book.title}</h2>
          <h3>Author(s): {book.author}</h3>
          <h3># of Pages: {book.pages}</h3>
          <h3>Current Page: {book.current}</h3>
          </div>
      })}
    </div>
  );
};

export default Book;
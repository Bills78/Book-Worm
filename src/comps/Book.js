function Book(props) {
  const { books, onDelete, onComplete} = props;

  return (
    <div className='books'>
      {books.map((book) => {
          return<div className='book'  key={book.id}>
            <h2>Title: {book.title}</h2>
            <h3>Author(s): {book.author}</h3>
            <h3># of Pages: {book.pages}</h3>
            <h3>Current Page: {book.current}</h3>
            <div className="bookbtns">
              <button onClick={() => onDelete(book.id)}>Delete</button>
              <button onClick={() => onComplete(book.id)}>Completed</button>
            </div>
            </div>
        })}
      </div>
    );
};

export default Book;
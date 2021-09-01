import React from "react";

const BookList = (props) =>{


  const books = props
  const deleteBook = (isbn) => {
    let filteredBook = books.filter(u=> u.isbn !== isbn)
    // setBooks(filteredBook)
  }
  if (books.length == 0) return <p>No Books</p>
  return books.map(book=>{
    return(
      <div key={book.isbn}>
        <h2>{book.title} </h2>
        <h3>{book.author}</h3>
        <a>Genre: {book.genre}</a>
        <a> ISBN: {book.isbn}</a>
        <p>Description: {book.description}</p>
        <img src={book.image} height='200' width='150' />
        <p></p>
        <a>Publisher: {book.publisher}</a>
        <a> Published: {book.published}</a>
        <button onClick={() => deleteBook(book.isbn)}>Delete</button>
      </div>
    )
  })
}
export default BookList
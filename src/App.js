import axios from "axios";
import React, {useEffect, useState} from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

const App = () =>{
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("useEfffect Called")
    getBooks();
  },[])

  const getBooks = async () => {
    try {
      let bookData = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
      console.log(bookData.data.data)
      setBooks(bookData.data.data)
    } catch (err) {
      alert("Error while grabbing book data");
      console.log(err);
    }
  };  

  const [showForm, setShowForm] = useState(false)

  const addBook = (book) => {
    let image = 'http://placeimg.com/480/640/any'
    let isbn = Math.floor(Math.random()*1000000000000)
    // es6 practice
    let full_book = {...book, image,isbn}
    setBooks([full_book, ...books])
  }
  
  const deleteBook = (isbn) => {
    let filteredBook = books.filter(u=> u.isbn !== isbn)
    setBooks(filteredBook)
  }

  const BookList = () =>{

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

  return(
    <div>
      <h1>Books</h1>
      { showForm && 
      <BookForm addBook={addBook} setShowForm={setShowForm}/>}
      <button 
        onClick={()=>setShowForm(!showForm)}>toggle new form</button>
      {BookList(books)}
    </div>
  )
}
export default App;

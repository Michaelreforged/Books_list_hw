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

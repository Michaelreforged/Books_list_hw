import React, {useState} from "react";

const BookForm = (props) =>{
  const [title, set_title] = useState('')
  const [author, set_author] = useState('')

  const handleSubmit = (e) => {
     //prevent page from reloading
     e.preventDefault()
     // pass the user obj to my App component to be added
     // to users state
     props.addBook({title, author})
     // hide form in App UI
     props.setShowForm(false)
     set_title('')
     set_author('')
  }
  return(
  <div>
    <h1>New Book Form</h1>
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input value={title}
          onChange={(e)=> set_title(e.target.value)}/>
      <p>Author</p>
      <input value={author}
          onChange={(e)=> set_author(e.target.value)}/>
      <button>Add</button>
    </form>
  </div>
  )

}

export default BookForm
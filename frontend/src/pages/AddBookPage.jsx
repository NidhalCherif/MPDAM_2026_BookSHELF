import { use } from 'react'
import AddBookForm from '../components/AddBookForm'
import { useNavigate } from 'react-router-dom'

const AddBookPage = ({onAddBook}) => {
  const navigate=useNavigate();
  const handleAddBook = (book) => { 
     onAddBook(book);
     navigate("/books");

  } 
  return (
    <div>
        <AddBookForm onAddBook={handleAddBook}/>
        
    </div>
  )
}

export default AddBookPage
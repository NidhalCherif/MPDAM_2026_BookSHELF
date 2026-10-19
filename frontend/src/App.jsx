import { useState } from "react";
import {Link,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AddBookForm from "./components/AddBookForm";
import AddBookPage from "./pages/AddBookPage";
import BookDetailPage from "./pages/BookDetailPage";
function App() {
            //1 données
            const[books, setBooks] =useState([{id:1,titre:'React',read:false,rating:4},
                                              {id:2,titre:'Dune',read:true,rating:1},
                                              {id:3,titre:'Symfony 7',read:true,rating:5},
                                              {id:4,titre:'Base de données',read:false,rating:1}]);
                       //2 comportements
            const handleDelete = (id) => { 
                      //1. Créer une copie du state et la  Manipuler la copie du  state
                  const booksUpdated=books.filter((book)=>book.id!==id
                  )
                  //2. modifier le state avec setter
                  setBooks(booksUpdated);

            }
            const toogleReadStatus = (id) => {
                 //1 créer une copie de state et la manipuler
               const booksUpdated=books.map((book)=>
                                      book.id===id?{...book,read:!book.read}:book)
                 //2Modifier la copie du state avec setter
                   setBooks(booksUpdated);
             }
const addBook = (Book) => { 
  const newBook={id:Date.now(),...Book};
  setBooks([...books,newBook]);
 }

          
           
            //3  affichage
return(
 <div>
 
  
  <Routes>
    <Route element={<Layout />}>
          <Route path='/' element={<HomePage books={books} />}/>
          <Route path='/books' element={<BooksPage books={books}
                                                    onDelete={handleDelete}
                                                    onToogleReadStatus={toogleReadStatus}/>} />
          <Route path='/books/new' element={<AddBookPage onAddBook={addBook} />}/>
          <Route path='books/:id' element={<BookDetailPage books={books}/>}/>
    </Route>      
  </Routes>

 </div>   
  )
}
  
export default App;
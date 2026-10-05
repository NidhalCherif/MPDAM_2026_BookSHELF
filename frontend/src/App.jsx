import { useState } from "react";
import BooksCounter from "./components/BooksCounter";
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";
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
             const totalBooks=books.length;
             const totalBooksLus=books.filter((book)=>book.read).length;
             const totalBooksNonLus=totalBooks-totalBooksLus;
           
          

            //3  affichage
return(
  <div className="container my-3">
    <h1>BookShelf Manager</h1>
    <div className="row">
<div className="my-3 col-12 col-md-4">
  <BooksCounter  total={totalBooks}
              totalLus={totalBooksLus}
              totalNonLus={totalBooksNonLus} />
  <AddBookForm />
             
      
</div>

    <div className="my-3 col-12 col-md-8">
      <BooksList books={books} 
                 onDelete={handleDelete}
                 onToogleReadStatus={toogleReadStatus}
                  />
      
    </div>

  </div>
  </div>
)


}
  
export default App;
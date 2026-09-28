import { useState } from "react";
function App() {
            //1 données
            const[books, setBooks] =useState([{id:1,titre:'React',qte:5},
                                              {id:2,titre:'Dune',qte:3},
                                              {id:3,titre:'Symfony 7',qte:4},
                                            {id:4,titre:'Base de données',qte:4}]);

            //2 comportements
            const handleDelete = (id) => { 
                      //1. Créer une copie du state et la  Manipuler la copie du  state
                  const booksUpdated=books.filter((book)=>book.id!==id
                  )
                  //2. modifier le state avec setter
                  setBooks(booksUpdated);

            }
            const handleIncremente = (id) => {
              const booksUpdated=books.map((book)=>book.id===id?{...book,qte:book.qte+1}:book);
              //2. modifier le state avec setter
                  setBooks(booksUpdated);

            }
            const handleDecremente = (id) => {
              const booksUpdated=books.map((book)=>book.id===id?{...book,qte:book.qte-1}:book);
              //2. modifier le state avec setter
                  setBooks(booksUpdated);

            }

            //3  affichage
return(
  <div className="container my-3">
    <h1>Liste des livres</h1>
    <table className="table">      <thead>
    <tr className='table-primary'>
      <th>Titre</th>
      <th>Quantité</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>

    {books.map((book)=>( 
      
       <tr key={book.id}>
        <td>{book.titre}</td>
        <td><button onClick={()=>handleDecremente(book.id)}
          >-</button>{book.qte} 
          <button onClick={()=>handleIncremente(book.id)}>+</button></td>
        <td>
          <button
        onClick={()=>handleDelete(book.id)}>
          ❌</button> </td>
        
      </tr>

    ))}
</tbody>
   </table>

  </div>
)


}
  
export default App;
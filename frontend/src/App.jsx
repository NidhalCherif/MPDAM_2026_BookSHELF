import { useState } from "react";
import {Link,Routes,Route} from "react-router-dom"
function App() {
            //1 données
            const[books, setBooks] =useState([{id:1,titre:'React',read:false,rating:4},
                                              {id:2,titre:'Dune',read:true,rating:1},
                                              {id:3,titre:'Symfony 7',read:true,rating:5},
                                              {id:4,titre:'Base de données',read:false,rating:1}]);
            const[count,setCount]=useState(0);
           
            //3  affichage
return(
 <div>
  <nav>
      <Link to="/">Accueil</Link>|<Link to="/books">Livres</Link>|
      <Link to="/books/new">Ajouter</Link>
  </nav>
  
  <Routes>
    <Route path='/' element={<h1>Accueil</h1>}/>
    <Route path='/books' element={<h1>Mes {books.length} livres</h1>}/>
    <Route path='/books/new' element={<h1>Ajouter un nouveau livre</h1>}/>
     
  </Routes>

 </div>   
  )
}
  
export default App;
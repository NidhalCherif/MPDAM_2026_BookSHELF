
import {Link,NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
            <Link className="navbar-brand" to='/'> 📚BookShelf</Link>
            <div className="navbar-nav ms-auto">
               <NavLink className='nav-link' to="/">Accueil</NavLink>
               <NavLink className='nav-link'to="/books">Livres</NavLink>
               <NavLink className='nav-link' to="/books/new">Ajouter</NavLink> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar
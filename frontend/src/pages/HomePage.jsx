
import BooksCounter from '../components/BooksCounter';
import { Link } from 'react-router-dom';

const HomePage = ({books}) => {
             const totalBooks=books.length;
             const totalBooksLus=books.filter((book)=>book.read).length;
             const totalBooksNonLus=totalBooks-totalBooksLus;
             const lastBooks=books.slice(-3).reverse();
    return (
    <div className="container">
        <h1>Bienvenue Dans BookShelf Manager</h1>
        <BooksCounter total={totalBooks}
                      totalLus={totalBooksLus}
                      totalNonLus={totalBooksNonLus} />
     <h2 className="mt-4">Les derniers livres ajoutés</h2>
     <ul className="list-group">
        {lastBooks.map((b)=>(
            <li  className="list-group-item" key={b.id}> <Link to={'/books/'+b.id}>{b.titre}</Link> </li>
        )
        )}
     </ul>
    <Link className="btn btn-primary" to="/books">Voir tous les livres</Link>



    </div>
  )
}

export default HomePage
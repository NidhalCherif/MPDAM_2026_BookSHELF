
import BooksList from '../components/BooksList'

const BooksPage = ({books,onDelete, onToogleReadStatus}) => {
  return (
    <div>
       <BooksList books={books}
                   onDelete={onDelete}
                    onToogleReadStatus ={onToogleReadStatus} />
    </div>
  )
}

export default BooksPage
import React from 'react'
import BookStatus from './BookStatus'
const BooksList = ({books,onDelete, onToogleReadStatus}) => {
  return (
    <div>
        <h3>Ma Bibliothèque</h3>
    <table className="table">      <thead>
    <tr className='table-primary'>
      <th>Titre</th>
      <th>Etat et Note</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>

    {books.map((book)=>( 
      
       <tr key={book.id}>
        <td>{book.titre}</td>
        <td>
          <BookStatus read={book.read}
                      rating={book.rating}
              />  
        </td>
        <td>
            <button className='btn btn-primary btn-sm'
            onClick={()=>onToogleReadStatus(book.id)}>
                Changer Satut</button>
          <button className='m-2 btn btn-secondary btn-sm'
              onClick={()=>onDelete(book.id)}>
          ❌</button> 
        </td>
        
      </tr>

    ))}
</tbody>
   </table>
    </div>
  )
}

export default BooksList
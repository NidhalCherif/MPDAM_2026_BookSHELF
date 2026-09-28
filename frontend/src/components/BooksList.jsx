import React from 'react'

const BooksList = ({books,onDelete, onToogleReadStatus}) => {
  return (
    <div>
        <h3>Ma Bibliothèque</h3>
    <table className="table">      <thead>
    <tr className='table-primary'>
      <th>Titre</th>
      <th>Etat</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>

    {books.map((book)=>( 
      
       <tr key={book.id}>
        <td>{book.titre}</td>
        <td>
            <button className={book.read?'btn btn-success btn-sm':'btn btn-secondary btn-sm'}
            onClick={()=>onToogleReadStatus(book.id)}>{book.read?'Lu':'A lire'}</button>
        </td>
        <td>
          <button className='btn btn-secondary btn-sm'
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
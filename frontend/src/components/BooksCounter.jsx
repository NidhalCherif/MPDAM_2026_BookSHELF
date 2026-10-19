import React from 'react'

const BooksCounter = ({total,totalLus,totalNonLus}) => {
  return (
    <div>
        
      <ul>
        <li>Total Books :{total}</li>
        <li>Livres Lus :{totalLus}</li>
        <li>Livres A lire: {totalNonLus} </li>
      </ul>
    </div>
  )
}

export default BooksCounter
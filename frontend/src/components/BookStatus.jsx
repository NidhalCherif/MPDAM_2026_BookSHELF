import React from 'react'

const BookStatus = ({read=false,rating=0}) => {
  return (
    <div>
        <span className={read?'badge bg-success': 'badge bg-secondary'}>
        {read?'Lu':'A lire!'}</span>
        <span className='m-2 badge bg-warning'>{'*'.repeat(rating)}</span>

    </div>
  )
}

export default BookStatus
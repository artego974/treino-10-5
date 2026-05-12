import React from 'react'

function Card(props) {
  return (
    <div className='w-1/3 shadow-2xl p-3 g-3 flex justify-center items-center'>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.table_number}</p>
    </div>
  )
}

export default Card
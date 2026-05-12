import React from 'react'

function Card(props) {
    async function checkIn() {
    await fetch(`http://localhost:3000/guest/checkin/${props.id}`, {
      method: "PATCH",
    })
    props.onCheckIn() 
  }
  return (
    <div className="w-1/3 shadow-2xl p-3 g-3 flex justify-center items-center min-h-1/7 flex-col">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.table_number}</p>
      {props.check_in ? (
        <p>Check-in feito</p>
      ) : (
        <button onClick={checkIn}>Fazer check-in</button>
      )}
    </div>
  );
}

export default Card
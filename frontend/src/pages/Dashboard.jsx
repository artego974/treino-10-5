import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  async function list() {
    const response = await fetch("http://localhost:3000/guest/dashboard");
    const res = await response.json();
    setData(res);
  }

  useEffect(() => {
    list();
  }, []);

  if (!data) return <p>Carregando...</p>; 

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
        <h1>Total: {data.total}</h1>
      </div>
      <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
        <h1>Confirmados: {data.check_in}</h1>
      </div>
      <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
        <h1>Pendentes: {data.pending}</h1>
      </div>
      <div className="shadow w-1/4 min-h-1/10 flex items-center justify-center">
        <h1>Ocupação: {data.occupancy}%</h1>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Reception() {
  const [guests, setGuests] = useState([]);
  const [search, setSearch] = useState("");
  async function list() {
    const response = await fetch("http://localhost:3000/guest/list");
    const data = await response.json();
    setGuests(data);
  }
  async function listName() {
    const response = await fetch(
      `http://localhost:3000/guest/list?name=${search}`,
    );
    const data = await response.json();
    setGuests(data);
  }
  useEffect(() => {
    list();
  }, []);
  useEffect(() => {
    if (search) {
      listName();
    } else {
      list();
    }
  }, [search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar"
        className="w-full p-10"
      />
      <div className="flex justify-center w-screen">
        {guests.map((g) => {
          return (
            <Card
              key={g.id}
              id={g.id}
              name={g.name}
              email={g.email}
              table_number={g.table_number}
              check_in={g.check_in}
              onCheckIn={list}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reception;

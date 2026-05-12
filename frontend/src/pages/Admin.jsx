import React, { useState } from "react";

function Admin() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [table_number, setTable_number] = useState("");

  async function criar() {
    const response = await fetch("http://localhost:3000/guest/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, cpf, phone, table_number }),
    });
    const data = await response.json();
    console.log("Criado:", data);
  }

  async function editar() {
    const response = await fetch(`http://localhost:3000/guest/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, cpf, phone, table_number }),
    });
    const data = await response.json();
    console.log("Editado:", data);
  }

  async function excluir() {
    await fetch(`http://localhost:3000/guest/delete/${id}`, {
      method: "DELETE",
    });
    console.log("Excluído");
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID (para editar ou excluir)"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="CPF"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
      />
      <input
        value={table_number}
        onChange={(e) => setTable_number(e.target.value)}
        placeholder="Mesa"
      />

      <button onClick={criar}>Criar</button>
      <button onClick={editar}>Editar</button>
      <button onClick={excluir}>Excluir</button>
    </div>
  );
}

export default Admin;

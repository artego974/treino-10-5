import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "post",
        body: JSON.stringify({email, password}),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json()
      localStorage.setItem("token",data.token)
      localStorage.setItem("role",data.user.role)
      
      if(response.user.role == "admin"){
         <Navigate to="/dashboard"/>
      }else{
        <Navigate to="/dashboard" />;
      }
     
    } catch (e) {
      setError("Login invalido");
    }
  }
  return (
    <div className="w-screen flex justify-center items-center">
      <input
        className="bg-amber-200 w-3xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        className="bg-amber-200 w-3xl"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Senha"
      />
      <button className=" w-3xl border" onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;

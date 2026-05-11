import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
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
      console.log(response);
      localStorage.setItem("role",response.user.role)
      
    //   if(response.user.role == "admin"){
    //      navigate("/dashboard");
    //   }else{
    //     navigate("/dashboard");
    //   }
     
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

import React, { useState } from "react";

function Home() {
  const [inputlogin, Setinputlogin] = useState("");
  function efetuarLogin() {
    if (inputlogin.toLowerCase() === "admin") {
      alert("você recebeu acesso de admin do sistema");
    } else {
      alert("você digitou errado o login certo é admin");
    }
  }
  return (
    <div className="home">
      <h1>Home - Login</h1>
      <label htmlFor="">Login</label>

      <input
        type="text"
        value={inputlogin}
        onChange={(e) => Setinputlogin(e.target.value)}
      />
      <button onClick={efetuarLogin}>entrar</button>
      <p>{/* {inputlogin} */}</p>
    </div>
  );
}

export default Home;

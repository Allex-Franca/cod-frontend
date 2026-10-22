import React, { useState } from "react";

function Home() {
  const [inputlogin, Setinputlogin] = useState('');
  return (
    <div className="home">
      <h1>Inputs Controlados</h1>
      <label htmlFor="">Login</label>

      <input type="text" 
       value={inputlogin}
       onChange={(e) => Setinputlogin(e.target.value)}
      />
      <p>
        {/* {inputlogin} */}
      </p>

      <button>entrar</button>
    </div>
  );
}

export default Home;

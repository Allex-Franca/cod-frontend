import React, { useState } from "react";

function Fumacinhar() {
  const [Fumaça, setFumaça] = useState();
  function fumar() {
    let crinca = Number(prompt("quantas crinças tem por perto?"));
    let velocidade = Number(prompt("qual a velocidade da fumaça?"));

    if (crinca === 0 || velocidade <= 0.5) {
      setFumaça("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setFumaça("Fumaça bloqueada. Aguardar condições ideais.");
    }
  }
  return (
    <div>
      <h2>Sarumano o magic</h2>
      <button onClick={fumar}>Fumaça</button>
      <br />
      {Fumaça}

    </div>
  );
}

export default Fumacinhar;

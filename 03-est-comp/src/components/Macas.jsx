import React, { useState } from "react";

function Macas() {
  const [Cmacas, setCmacas] = useState(0);
  function calcularMacas() {
    let Vmacas = Number(prompt("quantas maças você vai comprar"));
    if (Vmacas <= 6) {
      setCmacas(Vmacas * 0.3);
    } else {
      setCmacas(Vmacas * 0.25);
    }
  }
  return (
    <div>
      <h2>Maças</h2>
      <button onClick={calcularMacas}>Pagar Maças</button>
      <br />
      {Cmacas.toFixed(2)}
    </div>
  );
}

export default Macas;

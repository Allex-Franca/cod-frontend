import React, { useState } from "react";

function IMC() {
  const [pesoIdeal, setPesoIdeal] = useState(0);

  function calcularPeso() {
    const genero = prompt("Digite seu gênero: feminino ou masculino");
    const altura = Number(prompt("Digite sua altura em metros"));
    if (genero === "masculino") {
      const peso = 72.7 * altura - 58;
      setPesoIdeal(peso);
    } else if (genero === "feminino") {
      const peso = 62.1 * altura - 44.7;
      setPesoIdeal(peso);
    }
  }

  return (
    <div className="IMC">
      <h2>Peso ideal</h2>
      <button onClick={calcularPeso}>Calcular</button>
      <p>Peso ideal: {pesoIdeal.toFixed(2)} kg</p>
    </div>
  );
}

export default IMC;

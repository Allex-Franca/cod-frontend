import React, { useState } from "react";

function Demo() {
  const [inputnota1, SetInputNota1] = useState("");
  const [inputnota2, SetInputNota2] = useState("");
  const [inputnota, SetInputNota] = useState("");
  function calcularmedia() {
    let nota1 = Number(inputnota1);
    let nota2 = Number(inputnota2);
    let media = Number(nota1 + nota2) / 2;
    SetInputNota(media);
  }
  return (
    <div className="demo">
      <h1>Demo - Médias</h1>
      <label htmlFor="">Nota 1</label>

      <input
        type="number"
        value={inputnota1}
        onChange={(e) => SetInputNota1(e.target.value)}
      />
      <label htmlFor="">Nota 2</label>

      <input
        type="number"
        value={inputnota2}
        onChange={(e) => SetInputNota2(e.target.value)}
      />
      <button onClick={calcularmedia}>Calcular Média</button>
      {inputnota}
    </div>
  );
}

export default Demo;

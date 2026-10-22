import React, { useState } from "react";

function Pneus() {
  const [inputMotora, SetInputMotora] = useState("");
  const [inputMaquina, SetInputMaquina] = useState("");
  const [inputSaida, SetInputSaida] = useState("");
  function Pressao() {
    let pressaoMotora = Number(inputMotora);
    let pressaomaquina = Number(inputMaquina);
    let pressaoFinal = pressaoMotora - pressaomaquina;
    SetInputSaida(pressaoFinal);
  }
  return (
    <div className="pneus">
      <h1>Pneus - Pressão</h1>
      <label htmlFor="">Pressão Motorista</label>

      <input
        type="number"
        value={inputMotora}
        onChange={(e) => SetInputMotora(e.target.value)}
      />
      <label htmlFor="">Pressão Maquina</label>

      <input
        type="number"
        value={inputMaquina}
        onChange={(e) => SetInputMaquina(e.target.value)}
      />
      <button onClick={Pressao}>Pressão final</button>
      {inputSaida}
    </div>
  );
}

export default Pneus;

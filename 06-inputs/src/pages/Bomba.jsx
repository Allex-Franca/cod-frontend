import React, { useState } from "react";

function Bomba() {
  const [InputBomba, SetInputBomba] = useState("");
  const [InputExplosao, SetInputExplosao] = useState("");
  function bombar() {
    let Nrep = Number(InputBomba);
    let linha = "";

    for (let i = 0; i < Nrep; i++) {
      let N = 4 * i + 1;
      linha += `${N} ${N + 1} ${N + 2} CABUM!!!\n`;
    }

    SetInputExplosao(linha);
  }
  return (
    <div className="bombinha">
      <h1>Bomba - Repetição</h1>
      <label htmlFor="">Quantas bombas iram explodir?</label>
      <input
        type="number"
        value={InputBomba}
        onChange={(e) => SetInputBomba(e.target.value)}
      />
      <button onClick={bombar}>boom</button>
      <pre>{InputExplosao}</pre>
    </div>
  );
}

export default Bomba;

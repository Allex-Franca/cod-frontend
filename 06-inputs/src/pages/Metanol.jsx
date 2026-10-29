import React, { useState } from "react";

function Metanol() {
  const [InputAbastecimento, SetInputAbastecimento] = useState("");
  const [InputPortinha, SetInputPortinha] = useState({
    alcool: 0 ,
    gasolina: 0,
    diesel: 0,
    obrigado: false,
  });

  function Gasolina() {
    let gasosa = Number(InputAbastecimento);

    if (gasosa === 1) {
      InputPortinha.alcool++;
    } else if (gasosa === 2) {
      InputPortinha.gasolina++;
    } else if (gasosa === 3) {
      InputPortinha.diesel++;
    } else if (gasosa === 4) {
      InputPortinha.obrigado = true;
    } else {
      return;
    }

    SetInputPortinha({
      alcool: InputPortinha.alcool,
      gasolina: InputPortinha.gasolina,
      diesel: InputPortinha.diesel,
      obrigado: InputPortinha.obrigado,
    });

    if (gasosa >= 1 && gasosa <= 3) {
      SetInputAbastecimento("");
    }
  }

  return (
    <div className="posto">
      <h1>Posto de gasolina</h1>

      <label>Digite o código do combustível</label>

      <input
        type="number"
        value={InputAbastecimento}
        onChange={(e) => SetInputAbastecimento(e.target.value)}
      />

      <button onClick={Gasolina}>Abastecer</button>

      {InputPortinha.obrigado && <p>MUITO OBRIGADO</p>}

      <p>Álcool: {InputPortinha.alcool}L</p>
      <p>Gasolina: {InputPortinha.gasolina}L</p>
      <p>Diesel: {InputPortinha.diesel}L</p>
    </div>
  );
}

export default Metanol;

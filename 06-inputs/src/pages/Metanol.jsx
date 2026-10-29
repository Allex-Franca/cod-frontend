
import React, { useState } from "react";

function Metanol() {
  const [InputAbastecimento, SetInputAbastecimento] = useState("");
  const [InputPortinha, SetInputPortinha] = useState({
    alcool: 0,
    gasolina: 0,
    diesel: 0,
    obrigado: false,
  });

  function Gasolina() {
    let gasosa = Number(InputAbastecimento);

    if (gasosa === 1) {
      SetInputPortinha({
        alcool: InputPortinha.alcool + 1,
        gasolina: InputPortinha.gasolina,
        diesel: InputPortinha.diesel,
        obrigado: false,
      });
      SetInputAbastecimento("");
    } else if (gasosa === 2) {
      SetInputPortinha({
        alcool: InputPortinha.alcool,
        gasolina: InputPortinha.gasolina + 1,
        diesel: InputPortinha.diesel,
        obrigado: false,
      });
      SetInputAbastecimento("");
    } else if (gasosa === 3) {
      SetInputPortinha({
        alcool: InputPortinha.alcool,
        gasolina: InputPortinha.gasolina,
        diesel: InputPortinha.diesel + 1,
        obrigado: false,
      });
      SetInputAbastecimento("");
    } else if (gasosa === 4) {
      SetInputPortinha({
        alcool: InputPortinha.alcool,
        gasolina: InputPortinha.gasolina,
        diesel: InputPortinha.diesel,
        obrigado: true,
      });
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

      <p>Álcool: {InputPortinha.alcool}</p>
      <p>Gasolina: {InputPortinha.gasolina}</p>
      <p>Diesel: {InputPortinha.diesel}</p>
    </div>
  );
}

export default Metanol;

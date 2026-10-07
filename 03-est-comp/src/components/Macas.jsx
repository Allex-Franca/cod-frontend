import { useState } from "react";

function Macas() {
  const [macas, setMacas] = useState(10);

  function MaCas() {
    setMacas(macas * 0.30);
  }

  return (
    <div>
      <h2>Maçãs</h2>

      <p>Quantidade: {macas}</p>

      <button onClick={MaCas}>
        Calcular
      </button>
    </div>
  );
}

export default Macas;
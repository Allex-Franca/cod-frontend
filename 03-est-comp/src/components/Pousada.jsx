import { useState } from "react";

function Pousada() {
  const [total, setTotal] = useState(0);

  function pousada() {
    let Dias = Number(prompt("Quantos dias você vai passar na pousada?"));
    let diaria = "";

    if (Dias <= 5) {
      diaria = 100;
    } else if (Dias >= 6 && Dias <= 10) {
      diaria = 90;
    } else {
      diaria = 80;
    }

    let valor = Dias * diaria * 0.75 + 150;

    setTotal(valor);
  }

  return (
    <div className="pousada">
      <h2>Pousada, oba!!</h2>
      <button onClick={pousada}>Pousada</button>
      <br />
      R${total.toFixed(2)}
    </div>
  );
}

export default Pousada;

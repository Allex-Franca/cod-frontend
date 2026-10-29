import { useState } from "react";

function Aprovou_ou_Rodou() {
  const [inputN1, SetInputN1] = useState("");
  const [inputN2, SetInputN2] = useState("");
  const [inputMedia, SetInputMedia] = useState("");
  function calcularmedia() {
    let n1 = Number(inputN1);
    let n2 = Number(inputN2);
    let media = (n1 + n2) / 2;
    if (media >= 7){
        SetInputMedia("Aprovado")
    }
    else{SetInputMedia("Reprovado")}
  }
  return (
    <div className="AouR">
      <h1>Aprovado ou Reprovado - Notas</h1>
      <label htmlFor="">Nota 1</label>
      <input
        type="number"
        value={inputN1}
        onChange={(e) => SetInputN1(e.target.value)}
      />
      <label htmlFor="">Nota 2</label>
      <input
        type="number"
        value={inputN2}
        onChange={(e) => SetInputN2(e.target.value)}
      />

      <button onClick={calcularmedia}>Calcular Média</button>
      {inputMedia}
    </div>
  );
}

export default Aprovou_ou_Rodou;

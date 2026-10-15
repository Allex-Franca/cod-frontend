import React, { useState } from "react";

function Recrutamento() {
  const [Recruta, setRecrutar] = useState();
  function Recrutação() {
    let nadar = prompt("Sabe nadar?");
    let idade = Number(prompt("qual sua idade?"));
    let recomendação = prompt("tem recomendação?");

    if (nadar.toLocaleLowerCase() === "sim" || (idade >= 16 && recomendação.toLocaleLowerCase() !== "sim")) {
      setRecrutar("Aprovado para o navio!");
    } else if (nadar.toLocaleLowerCase() === "não" && idade >= 14 && recomendação.toLocaleLowerCase() === "sim") {
      setRecrutar(
        "Aprovado sob recomendação. Monitorar nas primeiras viagens.",
      );
    } else
      setRecrutar("Reprovado. Volte quando estiver mais preparado para o mar.");
  }
  return (
    <div>
      <h2>entendido recruta</h2>
      <button onClick={Recrutação}>recruta</button>
      <br />
      {Recruta}
    </div>
  );
}

export default Recrutamento;

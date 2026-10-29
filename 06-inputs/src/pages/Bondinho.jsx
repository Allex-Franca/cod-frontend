import React, { useState } from "react";

function Bondinho() {
  const [SetAluno, SetInputAluno] = useState("");
  const [SetMonitor, SetInputMonitor] = useState("");
  const [SetQuantidade, SetInputQuantidade] = useState("");
  function quantidade(){
    let alunos = Number(SetAluno)
    let monitores = Number(SetMonitor)
    let quantidade = alunos + monitores
    if(quantidade <= 50){
        SetInputQuantidade("o bondinho ja vai sair se segurem")
    }
    else{
        SetInputQuantidade("ses tão muito gordo o bondinho vai cair")
    }
  }
  return (
    <div className="bondinho">
      <h1>Bondinho - quantidade</h1>

      <label htmlFor="">Quantidade de Alunos</label>
      <input
        type="Number"
        value={SetAluno}
        onChange={(e) => SetInputAluno(e.target.value)}
      />
      <label htmlFor="">Quantidade de Monitores</label>
      <input
        type="Number"
        value={SetMonitor}
        onChange={(e) => SetInputMonitor(e.target.value)}
      />
      <button onClick={quantidade}>o bonde vai sair?</button>
      {SetQuantidade}
    </div>
  );
}

export default Bondinho;

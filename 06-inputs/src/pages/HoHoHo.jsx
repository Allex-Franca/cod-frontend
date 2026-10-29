import React, { useState } from "react";

function HoHoHo() {
  const [inputhohoho, setInputHohoho] = useState("");
  const [inputsaida, SetInputSaida] = useState("");
  function HOHOHO() {
    let ho = Number(inputhohoho);
    let saida = "";
    for (let i = 0; i < ho; i++) {
      saida += "Ho !";
      SetInputSaida(saida);
    }
  }
  return (
    <div className="hohoho">
      <h1>HO HO HO! - Repetição</h1>
      <label htmlFor="">Ho Ho HO!</label>

      <input
        type="number"
        value={inputhohoho}
        onChange={(e) => setInputHohoho(e.target.value)}
      />
      <button onClick={HOHOHO}>número de HO</button>
      {inputsaida}
    </div>
  );
}

export default HoHoHo;

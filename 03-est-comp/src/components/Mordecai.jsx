import React, { useState } from "react";

function Mordecai() {
  const [Zarpar, setZarpar] = useState();
  function ZarparMarujos() {
    let marujos = Number(prompt("quantos marujos estão a bordo?"))
    let comida = Number(prompt("quanta comida temos no stock?"))
    let comidaPmarujo = marujos/comida 

    if(marujos >= 10 || comidaPmarujo >= 1.5){
        setZarpar("Provisões suficientes. Rumo ao horizonte!")
    }
    else{
        setZarpar("Algo está errado. Posseidom não quer ninguém no mar hoje.")
    }
  }
  return <div>
    <h2>Capitão mordecai</h2>
      <button onClick={ZarparMarujos}>Zarpar aos mares</button>
      <br />
      {Zarpar}
  </div>;
}

export default Mordecai;

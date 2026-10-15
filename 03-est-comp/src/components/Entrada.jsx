import React, { useState } from 'react'

function Entrada() {
    const[resultado,setResultado] = useState();
    function enter(){
        let som = prompt("o som esta ligado?")
        let figurino = prompt("o figurino esta pronto?")

        if(som.toLocaleLowerCase() === "sim" && figurino.toLocaleLowerCase() === "sim"){
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        }
        else if (som.toLocaleLowerCase() === "não" && figurino.toLocaleLowerCase() === "sim"){
            setResultado("Sem som. Realizar apresentação alternativa no salão.")
        }
        else if (som.toLocaleLowerCase() === "sim" && figurino.toLocaleLowerCase() === "não"){
            setResultado("Faltando parte do figurino. Te vira no improviso!")
        }
        else{
            setResultado("Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }
  return (
    <div>
        <h2>Entrada do magico</h2>
        <button onClick={enter}>abram alas ao magico</button>
        <br />
        {resultado }
    </div>
  )
}

export default Entrada
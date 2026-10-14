import React, { useState } from 'react'

function Entrada() {
    const[resultado,setResultado] = useState();
    function enter(){
        let som = prompt("o som esta ligado?")
        let figurino = prompt("o figurino esta pronto?")

        if(som === "sim" && figurino === "sim"){
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        }
        else if (som === "não" && figurino === "sim"){
            setResultado("Sem som. Realizar apresentação alternativa no salão.")
        }
        else if (som === "sim" && figurino === "não"){
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
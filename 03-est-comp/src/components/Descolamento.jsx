import React, { use, useState } from 'react'

function Descolamento() {
    const[resultado,setResultado] = useState();
    function Sarumano(){
        let gripe = prompt("Esta gripado?")
        let tempoviagem = Number(prompt("qual o tempo de viagem até a festa?"))

        if(gripe.toLocaleLowerCase() === "não" && tempoviagem <= 45){
            setResultado("Viagem autorizada. Rumo ao show!")
        }
        else(setResultado("Deslocamento inviável. Melhor recusar este evento."))
    }
  return (
    <div><h2>Descolamento</h2>
    <button onClick={Sarumano}>Ir a festa</button>
    <br />
    {resultado}
    </div>
  )
}

export default Descolamento
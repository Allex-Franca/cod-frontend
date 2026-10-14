import React, { useState } from 'react'

function Dinossaro() {
    const[resultado,setResultado]=useState();
    function Transporte(){
        let Manutencao = prompt("A manutenção esta ativa?")
        let Emergencia = prompt("A emergencia esta ativa?")

        if (Emergencia === "não" && Manutencao === "não"){
            setResultado("Transporte liberado para uso.")
        }
        else{
            setResultado("Transporte indisponível por motivo de segurança.")
        }
    }
  return (
    <div><h2>Dinossaro</h2>
    <button onClick={Transporte}>Liberar</button>
    <br />
    {resultado}
    </div>
  )
}

export default Dinossaro
import React, { useState } from 'react'

function Jaulas() {
    const[resultado,setResultado] = useState()
    function abrir(){
        let visitantes = Number(prompt("quantos visitantes tem por perto?"))
        let horas = Number(prompt("que horas são?"))

        if(visitantes === 0 && horas <=8 || horas >= 18){
            setResultado("Liberação autorizada. Abrindo jaula.")
        }
        else{
            setResultado("Liberação negada. Área em uso ou fora do horário permitido.")
        }
    }
  return (
    <div><h2>Jaula</h2>
    <button onClick={abrir}>abrir jaulas</button>
    <br />
    {resultado}
    </div>
  )
}

export default Jaulas
import React from 'react'
import { useState } from 'react'

function Voto() {
    const [voto,setVoto] = useState()
    function votacao(){
        let idade = Number(prompt("qual sua idade"))
        if(idade <= 16){
            setVoto("Não pode votar")
        }
        else if(idade >= 16 &&idade <= 17){
            setVoto("voto facultativo")
        }
        else if(idade >= 18 && idade <= 64){
            setVoto("Voto obrigatorio")
        }
        else {setVoto("voto facultativo")}
    }
  return (
      <div className='Voto'>
      {voto}
      <h2>Voto</h2>
    <button onClick={votacao}>votacao</button>
    </div>
  )
}

export default Voto
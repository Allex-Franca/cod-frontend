import React, { useState } from 'react'

function Acesso() {
    const[resultado,setResultado] = useState();
    function Denis(){
        let crachaV = "1234"
        let digitarSenha = prompt("insira a senha")

        if(digitarSenha === crachaV){
            setResultado("Acesso permitido")
        }
        else{
            setResultado("Acesso negado")
        }
    }
  return (
    <div><h2>Senha</h2>
    <button onClick={Denis}>Inserir Senha</button>
    <br />
    {resultado}
    </div>
  )
}

export default Acesso
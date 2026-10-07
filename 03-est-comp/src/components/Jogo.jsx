import { useState } from 'react'

function Jogo() {
    const[resultado,setResultado] = useState()
    
    function classificar(){
        let pontos = Number(prompt("Quantos pontos?"))
        if(pontos <= 10){
            setResultado("betinha mogado")
        }
        else if(pontos <= 100){
            setResultado("melhorou um pouco betinha")
        }
        else if(pontos <= 200){
            setResultado("supimpa!!")
        }
        else{
            setResultado("farmou muita aura")
        }
    }
  return (
      <div className='Jogo'>
      {resultado}
      <h2>Jogo do mano juca</h2>
    <button onClick={classificar}>Classificar</button> 
    </div>
  )
}

export default Jogo
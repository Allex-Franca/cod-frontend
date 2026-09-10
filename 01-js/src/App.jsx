import './App.css'

function App() {
  
  function testar(){
    let nome = prompt("qual seu nome?");
    let BocaDoSapo = nome;
    alert(nome+', seu nome tá na BocaDoSapo ')
  }
  function calcularMedia(){
    let N1 = Number(prompt("qual sua primeira nota?"))
    let N2 = Number(prompt("qual sua segunda nota?"))
    
    let media = Number(N1+N2)/2

    alert("sua média: "+media)
  }
  function calcularIMC(){
    let altura = Number(prompt("qual sua altura?"))
    let peso = Number(prompt("qual seu peso?"))
    
    let IMC = Number (peso/(altura*altura))

    alert("seu IMC: "+IMC)
  }

  return (
   <div className="cont-app">
    <h1>Javascript no React</h1>
    <button onClick={testar}>testar</button>
    <button onClick={calcularMedia}>média</button>
    <button onClick={calcularIMC}>IMC</button>
   </div>
  )
}

export default App

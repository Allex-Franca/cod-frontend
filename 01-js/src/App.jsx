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

    alert("seu IMC: "+IMC.toFixed(2))
  }
 function calcularpontos(){
   let vitorias = Number(prompt("Número de vitórias"))
   let empates = Number(prompt("Número de empates"))
   
   let pontos = vitorias*3 + empates;

   alert("o time teu tem "+pontos+" pontos")
}
 function calcularsapatos(){
  let sapatos = Number(prompt("qual o valor do sapatos que você vai trocar:"))
  let trocas = Number(prompt("quantos calçados você quer trocar:"))

  let vales = trocas*sapatos

  alert("valor total de troca: R$"+vales.toFixed(2))

 }
 function calcularDEVS(){
  let CLT = Number(prompt("quantos CLTs temos:"))
  let estagiarios = Number(prompt("quantos estagiarios temos:"))
  let PJ = Number(prompt("quantos PJs temos:"))

  let total = CLT+estagiarios+PJ

  alert("Temos o total de "+total+" devs")
 }
 function calcularLaranjas(){
  let laranjasI = Number(prompt("quantas laranjas temos no incio:"))
  let laranjasF = Number(prompt("quantas laranjas temos no final:"))

  let laranjaV = laranjasI-laranjasF

  alert("o total de laranjas vendidas, foi "+laranjaV)
 }
 function CalcularDivida(){
   let custoM = Number(prompt("qual o custo mensal que a igreja tem:"))
   let dízimo = Number(prompt("qual o valor arrecadado pelo dízimo"))

   let divida_atualizada = custoM-dízimo

   if(custoM<dízimo){
    alert("a divida esta quitada")
   }
   else{
    alert("ainda resta o total de R$"+divida_atualizada.toFixed(2)+" a ser pago")
   }
 }
  return (
   <div className="cont-app">
    <h1>Javascript no React</h1>

    <h2>Exercicios Supimpas</h2>

   <button onClick={calcularpontos}>Campeonato</button>
   <button onClick={calcularsapatos}>Troca pé pequeno</button>
   <button onClick={calcularDEVS}>Força Devs</button>
   <button onClick={calcularLaranjas}>Pomar</button>
   <button onClick={CalcularDivida}>Divida Sagrada</button>
   <hr/>

    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    <button onClick={calcularIMC}>IMC</button>
   </div>
  )
}
export default App

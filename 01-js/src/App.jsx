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
 function calcularsalario(){
  let salario = Number(prompt("quanto você recebe em 1 Mês:"))
  
  let diario = salario/20

  alert("o salario diário de junin é de R$"+diario.toFixed(2))
 }
 function Calcularpeso(){
  let PBT = Number(prompt("qual o peso bruto:"))
  let tara = Number(prompt("qual o peso da tara:"))

  let peso_carga = PBT-tara

  alert("o peso da carga é de "+peso_carga+"KG")
 }
 function Calcularchances(){
  let n = Number(prompt("quantas vezes o canditato usou o celular:"))
  let chance = (0.1/(1+500*n))*100

  alert(chance.toFixed(4)+"% do canditado ser selecionado")
 }
 function calculartelle(){
   let Peso = Number(prompt("qual o peso do seu produto:"));
   let distancia = Number(prompt("qual o distancia do seu produto:"));
   let volume = Number(prompt("qual o volume do seu produto:"));

   let frete = 15+(2*Peso)+(0.05*distancia)+(10*volume)

   alert("o valor do seu frete é R$"+frete.toFixed(2))
 }
 function calcularBete(){
   let Vbruto = Number(prompt("qual o valor bruto faturado hoje:"))
   let premiaçoes = Number(prompt("qual sera o valor gasto em premiações hoje:"))
   let presentes = Number(prompt("qual sera o valor gasto em presentes hoje:"))
   let comissoes= Number(prompt("qual sera o valor gasto em comissões hoje:"))

   let Vliquido = Vbruto-premiaçoes-presentes-comissoes

   alert("o valor que restante é de R$"+Vliquido.toFixed(2))
 }
 function calcularGanso(){
   let suprimentos = Number(prompt("quanto foi gasto em suprimentos e mercadoria"))
   let ingressos = Number(prompt("quanto foi o faturamento da venda ingressos"))
   let itens = Number(prompt("quanto foi o faturamento da venda de itens"))

   let faturamento = ingressos + itens
   let lucroR = faturamento - suprimentos
   let lucroP = (lucroR/suprimentos)*100

   alert("lucro o em reais foi de R$"+lucroR.toFixed(2)+"\n e o lucro percentual foi de R$"+lucroP+"%")
 }
 function calcularbomba(){
  let shows = Number(prompt("quantos shows você tem marcados:"))
  let dinheiro = Number(prompt("quantos de dinheiro você tem disponivel"))


  let bombas = shows*7
  let valorbomba=bombas*50

  if(valorbomba<=dinheiro){
   alert("o total de bombas gastas sera "+bombas+" e o total gasto sera R$"+valorbomba.toFixed(2))
  }
  else{
   alert("o total de bombas gastas sera "+bombas+" mas você não possui dinheiro o suficiente para comprar todas")
  }
 }
 function calcularJuca(){
   let salario = Number(prompt("digite o valor do seu salario"))
   let moradia = Number(prompt("quanto você gasta em moradia"))
   let agua = Number(prompt("quanto você gasta em água"))
   let luz = Number(prompt("quanto você gasta em luz"))
   let internet = Number(prompt("quanto você gasta em internet"))
   let gasolina = Number(prompt("quanto você gasta em gasolina"))
   let streamings = Number(prompt("quanto você gasta em streamings"))
   let telefone = Number(prompt("quanto você gasta em telefone"))
   let lazer = Number(prompt("quanto você gasta em lazer"))

   let total_gasto = moradia+agua+luz+internet+gasolina+streamings+telefone+lazer
   let Vfinal = salario-total_gasto

   if(Vfinal>=0   ){
      alert("o valor que lhe restou foi de R$"+Vfinal.toFixed(2))
   }
   else{
      alert("lhe falta dinheiro para pagar todas sua dispesas")
   }
 }
 function Calculartinta(){
   let compra = Number(prompt("qual foi o valor do quadro que você comprou:"))
   let venda = compra*3
   
   alert("o preço so seu produto sera de R$"+venda)
 }
 function Calcularracao(){
   let racao = Number(prompt("quantas gramas de ração você vai levar:"))
   let peso_gramas = (racao/1000)*10

   alert("o preço total sera de "+peso_gramas.toFixed(2))
 }
 function calcularchurras(){
   let pessoas = Number(prompt("Quantas pessoas ao todo:"));
   let adultosCarne = Number(prompt("Quantos adultos comem carne:"));
   let criancasCarne = Number(prompt("Quantas crianças comem carne:"));
   let pessoascerveja = Number(prompt("quantas pessoas bebem cerveja:"))
   let pessoasCe = pessoascerveja
   let nivel = prompt("digite o nivel da sua compra \nleve\nmedio\nmonstro")
   let carne = ""
   let cerveja = ""
   let agua = ""
   let refri = ""
   let carvao = ""
   let sal = ""

   if(nivel == "leve"){
   carne = (adultosCarne * 0.5) + (criancasCarne * 0.25); 
   cerveja = pessoasCe*1
   agua = pessoas*0.5
   refri = pessoas*0.2
   carvao = pessoas*0.5
   sal = pessoas*0.25

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
   else if(nivel == "medio"){
   carne = (adultosCarne * 1) + (criancasCarne * 0.5);
   cerveja = pessoasCe*2
   agua = pessoas*1
   refri = pessoas*0.5
   carvao = pessoas*1
   sal = pessoas*0.5

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
   else if(nivel == "monstro"){
   carne = (adultosCarne * 2) + (criancasCarne * 1);
   cerveja = pessoasCe*4
   agua = pessoas*2
   refri = pessoas*1
   carvao = pessoas*2
   sal = pessoas*1

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
    let racha = prompt("Deseja calcular o racha?\nsim\nnao");

    if(racha == "sim"){
        let valor = Number(prompt("Qual foi o valor total gasto?"));
        let pessoasRacha = Number(prompt("Quantas pessoas vao dividir?"));

        let valorI = valor / pessoasRacha;

        alert("Cada pessoa vai pagar R$" + valorI.toFixed(2));
    }
 }
 function calcularjacares(){
  let caminhoes = Number(prompt("Quantos caminhões serão necessários?"));
  let jacares = caminhoes * 50;
  let receita = jacares * 90;
  let custo = caminhoes * 450;
  let lucroJ = receita - custo;

  alert("o lucro da temporada sera de R$"+lucroJ.toFixed(2))
 }
 function calcularIA(){
  let Prompt = prompt("digite seu prompt")
  let token = Prompt.length + 5
  let valorT = token*2
  alert("o total de tokens gasto foi "+token+" tokens\ne o valor em R$"+valorT.toFixed(2))
 }
 function calcularjunin(){
  let horas = Number(prompt("quantas horas de trabalho"))
  let serviço = (350*horas)+500
  let lucro = horas * 350

  alert("Valor do serviço: R$ " + serviço + "\nLucro: R$ " + lucro)
 }
 function relatorio(){
  let relatoriosPF = 40;
  let relatoriosPJ = 33;
  let tempoPF = 12;
  let tempoPJ = 42;
  let valorPF = 2350;
  let valorPJ = 8900;

  let totalRelatorios = relatoriosPF + relatoriosPJ;
  let tempoTotal = tempoPF + tempoPJ;
  let valorTotal = valorPF + valorPJ;
  let mediaValorPF = valorPF / relatoriosPF;
  let mediaValorPJ = valorPJ / relatoriosPJ;
  let mediaTempoPF = (tempoPF * 60) / relatoriosPF;
  let mediaTempoPJ = (tempoPJ * 60) / relatoriosPJ;

  alert("=== RELATÓRIO KOWALSKI ===\n"+
  "DADOS PF:\n" +
  "Relatórios: " + relatoriosPF + "\n" +
  "Tempo: " + tempoPF + " horas\n" +
  "Valor: R$ " + valorPF.toFixed(2) + "\n" +
  "Média por relatório: R$ " + mediaValorPF.toFixed(2) + "\n" +
  "Tempo médio: " + mediaTempoPF.toFixed(0) + " minutos\n\n" +

  "DADOS PJ:\n" +
  "Relatórios: " + relatoriosPJ + "\n" +
  "Tempo: " + tempoPJ + " horas\n" +
  "Valor: R$ " + valorPJ.toFixed(2) + "\n" +
  "Média por relatório: R$ " + mediaValorPJ.toFixed(2) + "\n" +
  "Tempo médio: " + mediaTempoPJ.toFixed(0) + " minutos\n\n" +

  "RESUMO:\n" +
  "Total de relatórios: " + totalRelatorios + "\n" +
  "Tempo total: " + tempoTotal + " horas\n" +
  "Valor total: R$ " + valorTotal.toFixed(2)
);
 }
  return (
   <div className="body">
    <h1>Javascript no React</h1>

    <h2>Exercicios Supimpas</h2>
   
   <button onClick={calcularjacares}>Jacas</button>
   <button onClick={calcularIA}>IA</button>
   <button onClick={calcularjunin}>JUNIN</button>
   <button onClick={relatorio}>Kowalski relatorio</button>
   
   <hr />
   
   <button onClick={calculartelle}>telles</button>
   <button onClick={calcularBete}>TA PAGANDO</button>
   <button onClick={calcularGanso}>GANSO</button>
   <button onClick={calcularbomba}>Bomba</button>
   <button onClick={calcularJuca}>dispesas</button>
   <button onClick={Calculartinta}>quadro</button>
   <button onClick={Calcularracao}>ração</button>
   <button onClick={calcularchurras}>E O CHURRAS MEU</button>
   
   <hr />

   <button onClick={calcularpontos}>Campeonato</button>
   <button onClick={calcularsapatos}>Troca pé pequeno</button>
   <button onClick={calcularDEVS}>Força Devs</button>
   <button onClick={calcularLaranjas}>Pomar</button>
   <button onClick={CalcularDivida}>Divida Sagrada</button>
   <button onClick={calcularsalario}>Salario</button>
   <button onClick={Calcularpeso}>telle button</button>
   <button onClick={Calcularchances}>chances</button>
   
   <hr/>

    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    <button onClick={calcularIMC}>IMC</button>
   </div>
  )
}
export default App

import { useState } from "react";
import "./App.css";

function App() {
  const [Saida, setSaida] = useState("");

  function CalcularMedia() {
    let N1 = Number(prompt("insira nota 1"));
    let N2 = Number(prompt("insira nota 2"));
    let N3 = Number(prompt("insira nota 3"));

    let media = (N1 + N2 + N3) / 3;

    setSaida(media.toFixed(1));
  }
  function RolarD6() {
    let D6 = Math.ceil(Math.random() * 6);
    setSaida(D6);
  }
  function RolarD8() {
    let D8 = Math.ceil(Math.random() * 8);
    setSaida(D8);
  }
  function RolarD12() {
    let D12 = Math.ceil(Math.random() * 12);
    setSaida(D12);
  }
  function RolarD20() {
    let D20 = Math.ceil(Math.random() * 20);
    setSaida(D20);
  }
  function RolarD100() {
    let D100 = Math.ceil(Math.random() * 100);
    setSaida(D100);
  }
  function RolarD1000() {
    let D1000 = Math.ceil(Math.random() * 1000);
    setSaida(D1000);
  }
  function Verificarsenha() {
    let senha = Number(prompt("digite sua senha"));
    if (senha === 1234) {
      setSaida("acesso permitido!!!");
    } else {
      setSaida("acesso negado!!!");
    }
  }
  function Verificarmaior() {
    let A = Number(prompt("digite um numero"));
    let B = Number(prompt("digite um numero"));
    if (A > B) {
      setSaida(A);
    } else {
      setSaida(B);
    }
  }
  function VerificarSP() {
    let placa_carro = prompt("qual a placa do carro");
    let digito_final = placa_carro.at(-1);

    if (digito_final == 0 || digito_final == 1) {
      setSaida("Não pode rodar na segunda-feira");
    } else if (digito_final == 2 || digito_final == 3) {
      setSaida("Não pode rodar na terça-feira");
    } else if (digito_final == 4 || digito_final == 5) {
      setSaida("Não pode rodar na quarta-feira");
    } else if (digito_final == 6 || digito_final == 7) {
      setSaida("Não pode rodar na quinta-feira");
    } else if (digito_final == 8 || digito_final == 9) {
      setSaida("Não pode rodar na sexta-feira");
    }
  }
  return (
    <div className="app">
      <h1>Estados!</h1>
      <p>Resultado: {Saida}</p>

      <button onClick={Verificarsenha}>Senha</button>
      <button onClick={Verificarmaior}>Maior</button>
      <button onClick={VerificarSP}>SP</button>
      <br />
      <br />
      <button onClick={CalcularMedia}>Média</button>
      <button onClick={RolarD6}>D6</button>
      <button onClick={RolarD8}>D8</button>
      <button onClick={RolarD12}>D12</button>
      <button onClick={RolarD20}>D20</button>
      <button onClick={RolarD100}>D100</button>
      <button onClick={RolarD1000}>D1000</button>
    </div>
  );
}

export default App;

import "./App.css";
import IMC from "./components/IMC";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Macas from "./components/Macas";
import Mordecai from "./components/Mordecai";
import Recrutamento from "./components/Recrutamento";
import Fumacinhar from "./components/Fumacinhar";
import Descolamento from "./components/Descolamento";
import Entrada from "./components/Entrada";
import Dinossaro from "./components/Dinossaro";
import Acesso from "./components/Acesso";
import Jaulas from "./components/Jaulas";


function App() {
  return (
    <div className="app">
      <h1>03-estados e componentes</h1>
      <h2>#0030</h2>
      <Mordecai/>
      <Recrutamento/>
      <Fumacinhar/>
      <Descolamento/>
      <Entrada/>
      <Dinossaro/>
      <Acesso/>
      <Jaulas/>
      <hr />
      <h2>#0027.se05</h2>
      <Jogo />
      <Pousada />
      <Voto />
      <IMC />
      <Macas />
    </div>
  );
}

export default App;

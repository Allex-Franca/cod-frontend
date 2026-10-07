import "./App.css";
import IMC from "./components/IMC";
import Jogo from "./components/Jogo";
import Macas from "./components/macas";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";

function App() {

  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

      <Jogo/>
      <Pousada/>
      <Voto/>
      <IMC/>
      <Macas/>
    </div>
  );
}

export default App;

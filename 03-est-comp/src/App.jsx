import "./App.css";
import IMC from "./components/IMC";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Macas from "./components/Macas";


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

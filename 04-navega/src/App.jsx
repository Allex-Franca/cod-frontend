import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import MinhasCompras from "./components/MinhasCompras";

function App() {
  const [Pagina, setPagina] = useState();
  return (
    <div className="app">
      <nav>
        <button onClick={() => setPagina(0)}>Home</button>
        <button onClick={() => setPagina(1)}>Ofertas</button>
        <button onClick={() => setPagina(2)}>MinhasCompras</button>
      </nav>
      <h1>Navegação</h1>
      {Pagina === 0 && <Home />}
      {Pagina === 1 &&  <Ofertas/>}
      {Pagina === 2 &&  <MinhasCompras/>}
     
    </div>
  );
}

export default App;

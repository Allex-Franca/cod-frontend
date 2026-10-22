import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Pneus from "./pages/Pneus";

function App() {
  const [pagina,setPagina] = useState();
  return (
    <div className="app">
      <h1>Inputs Controlados</h1>
      <button className="btn-demo" onClick={() => setPagina(0)}><h2>Menu</h2></button>
      <nav>
        <button onClick={() => setPagina(1)}>Home</button>
        <button onClick={() => setPagina(2)}>Demo</button>
        <button onClick={() => setPagina(3)}>Pneus</button>
      </nav>

      {pagina === 0 && <></>}
      {pagina === 1 && <Home />}
      {pagina === 2 && <Demo/>}
      {pagina === 3 && <Pneus/>}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Pneus from "./pages/Pneus";
import HoHoHo from "./pages/HoHoHo";
import Aprovou_ou_Rodou from "./pages/Aprovou_ou_Rodou";
import Bondinho from "./pages/Bondinho";
import Bomba from "./pages/Bomba";
import Metanol from "./pages/Metanol";


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
        <button onClick={() => setPagina(4)}>HO HO HO!</button>
        <button onClick={() => setPagina(5)}>Aprovou ou Rodou</button>
        <button onClick={() => setPagina(6)}>Bondinho</button>
        <button onClick={() => setPagina(7)}>Bomba</button>
        <button onClick={() => setPagina(8)}>Metanol</button>
      </nav>

      {pagina === 0 && <></>}
      {pagina === 1 && <Home />}
      {pagina === 2 && <Demo/>}
      {pagina === 3 && <Pneus/>}
      {pagina === 4 && <HoHoHo />}
      {pagina === 5 && <Aprovou_ou_Rodou />}
      {pagina === 6 && <Bondinho />}
      {pagina === 7 && <Bomba />}
      {pagina === 8 && <Metanol />}
    </div>
  );
}

export default App;

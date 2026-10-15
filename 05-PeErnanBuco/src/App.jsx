import { useState } from "react";
import "./App.css";
import OracaoDevWen from "./components/OracaoDevWen";
import OracaodoFrontend from "./components/OracaodoFrontend";
import OracaoDoBackend from "./components/OracaoDoBackend";
import OraçãoDoFullstack from "./components/OraçãoDoFullstack";
import OracaoDoDeploy from "./components/OracaoDoDeploy";

function App() {
  const [Pagina, setPagina] = useState();

  return (
    <div className="app">
      <h1>Operação Devs</h1>
      <hr />
      <nav>
        <button onClick={() => setPagina(0)}>Oração Dev Web</button>
        <button onClick={() => setPagina(1)}>Oração Dev Frontend</button>
        <button onClick={() => setPagina(2)}>Oração Do Backend</button>
        <button onClick={() => setPagina(3)}>Oração Do Fullstack</button>
        <button onClick={() => setPagina(4)}>Oração Do Deploy</button>
      </nav>
      <hr />
      {Pagina === 0 && <OracaoDevWen/>}
      {Pagina === 1 && <OracaodoFrontend/>}
      {Pagina === 2 && <OracaoDoBackend/>}
      {Pagina === 3 && <OraçãoDoFullstack/>}
      {Pagina === 4 && <OracaoDoDeploy/>}
      <hr />
    </div>
  );
}

export default App;

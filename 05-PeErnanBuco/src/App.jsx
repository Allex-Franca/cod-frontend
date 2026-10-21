import { useState } from "react";
import "./App.css";
import OracaoDevWen from "./components/OracaoDevWen";
import OracaodoFrontend from "./components/OracaodoFrontend";
import OracaoDoBackend from "./components/OracaoDoBackend";
import OraçãoDoFullstack from "./components/OraçãoDoFullstack";
import OracaoDoDeploy from "./components/OracaoDoDeploy";
import OracaoDoProgramador from "./components/OracaoDoProgramador";
import OracaoDoEstudante from "./components/OracaoDoEstudante";
import OracaoDoResiliente from "./components/OracaoDoResiliente";
import OracaoDoDevCansado from "./components/OracaoDoDevCansado";
import OracaoDoAprendiz from "./components/OracaoDoAprendiz";

function App() {
  const [Pagina, setPagina] = useState();

  return (
    <div className="app">
      <h1>Operação Devs</h1>
        <button onClick={() => setPagina(-1)}>Menu</button>
      <hr />
      <nav>
        <button onClick={() => setPagina(0)}>DevWeb</button>
        <button onClick={() => setPagina(1)}>DevFrontend</button>
        <button onClick={() => setPagina(2)}>Backend</button>
        <button onClick={() => setPagina(3)}>Fullstack</button>
        <button onClick={() => setPagina(4)}>Deploy</button>
        <button onClick={() => setPagina(5)}>Programador</button>
        <button onClick={() => setPagina(6)}>Estudante</button>
        <button onClick={() => setPagina(7)}>Resiliente</button>
        <button onClick={() => setPagina(8)}>Aprendiz</button>
        <button onClick={() => setPagina(9)}>DevCansado</button>
      </nav>
      <hr />
      {Pagina === -1 && <></>}
      {Pagina === 0 && <OracaoDevWen/>}
      {Pagina === 1 && <OracaodoFrontend/>}
      {Pagina === 2 && <OracaoDoBackend/>}
      {Pagina === 3 && <OraçãoDoFullstack/>}
      {Pagina === 4 && <OracaoDoDeploy/>}
      {Pagina === 5 && <OracaoDoProgramador/>}
      {Pagina === 6 && <OracaoDoEstudante/>}
      {Pagina === 7 && <OracaoDoResiliente/>}
      {Pagina === 8 && <OracaoDoAprendiz/>}
      {Pagina === 9 && <OracaoDoDevCansado/>}
      <hr />
    </div>
  );
}

export default App;

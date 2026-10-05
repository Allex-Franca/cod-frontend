import "./Main.css";
import ServicoCard from "../ServicoCard/ServicoCard";

const servicos = [
  {
    id: 1,
    icone: "🪟",
    titulo: "Design de interface",
    descricao: "Telas claras pensadas para o usuário",
  },
  {
    id: 2,
    icone: "📱",
    titulo: "Responsividade",
    descricao: "O mesmo site em qualquer tela",
  },
  {
    id: 3,
    icone: "🚀",
    titulo: "Performace",
    descricao: "Páginas leves que carregam rápido",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam com perfeição</h1>
        <p>
          Layouts responsivos, rápidos e acessíveis para o seu negócio crescer
        </p>
        <div className="hero-buttons">
          <a href="#orcamentos" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portifolio" className="btn-secondary">
            Ver portifólio
          </a>
        </div>
      </section>
      <section className="service">
        <h2>Nossos serviços</h2>
        <div className="servicos-grid">
          {servicos.map((Servico) => (
            <ServicoCard
              key={Servico.id}
              icone={Servico.icone}
              titulo={Servico.titulo}
              descricao={Servico.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;

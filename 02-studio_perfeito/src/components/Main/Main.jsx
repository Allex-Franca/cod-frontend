import "./Main.css";
import ServicoCard from "../ServicoCard/ServicoCard";

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
          <ServicoCard
            titulo="Design de Interface"
            icone="🪟"
            descricao="Telas claras, pensadas para o usuário"
          />
          <ServicoCard
            titulo="Responsividade"
            icone="📱"
            descricao="O mesmo site em qualquer tela"
          />
          <ServicoCard
            titulo="Performace"
            icone="🚀"
            descricao="Páginas leves que carregam rápido"
          />
        </div>
      </section>
    </main>
  );
}
export default Main;

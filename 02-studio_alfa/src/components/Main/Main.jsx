import "./Main.css";

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
          <div className="servico-card">
            <span>🪟</span>
            <h3>Design Design</h3>
            <p>telas claras, pensadas para o usuário.</p>
          </div>
          <div>
            <div className="servico-card">
              <span>📱</span>
              <h3>Responsividade</h3>
              <p>O mesmo site em qualquer tela.</p>
            </div>
          </div>
            <div className="servico-card">
              <span>🚀</span>
              <h3>Perfomace</h3>
              <p>Páginas leves que carragam rapidamente com perfeição</p>
            </div>
          </div>
      </section>
    </main>
  );
}
export default Main;

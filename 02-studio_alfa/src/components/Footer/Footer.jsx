import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>&copy; 2026 studio perfeito</span>
        <div className="footer-icons">
          <a href="https://www.clickjogos.com.br/jogos-de-acao/fireboy-and-watergirl-1-in-forest-temple">
            <img src="..\..\src\assets\img\insta.png" alt="" />
          </a>
          <a href="#">
            <img src="..\..\src\assets\img\git.png" alt="" />
          </a>
          <a href="#">
            <img src="..\..\src\assets\img\email.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

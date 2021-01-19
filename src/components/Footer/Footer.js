import './style.css';
import emailIcon from '../../assets/icons/email.svg';
import headPhoneIcon from '../../assets/icons/headPhone.svg';
import corebizLogo from '../../assets/icons/corebiz.svg';
import vtexLogo from '../../assets/icons/vtex.svg';
function Footer() {
  return (
    <footer>
      <section className="address">
          <h3>Localização</h3>
          <p>Avenida Andrômeda, 200. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
          <br/>
          <a href="tel:+551130901039"> +55 11 3890 1039</a>
      </section>
      <section className="contact">
        <ul>
          <li>
              <img src={emailIcon} alt="icon-msg" />
              <a href="/fale-conosco">Entre em contato</a>
          </li>
          <li>
              <img src={headPhoneIcon} alt="icon-phone" />
              <a href="/chat">Fale com o nosso <br />consultor online</a>
          </li>
        </ul>
      </section>
      <section className="created">
        <div className="icon">
            <p>Created by</p>
            <img src={corebizLogo} alt="Logo Corebiz" />
        </div>
        <div className="icon">
            <p>Power by</p>
            <img src={vtexLogo} alt="Logo Corebiz" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;


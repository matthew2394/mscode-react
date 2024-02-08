import '../styles/Footer.css';
import msCode from '../assets/MsCode.png';

const Footer = () => {
    return (
      <footer id="footer">
      <div className="container">
            <div className="footer-center">
              <a><img src={msCode} alt="Logo" /></a>
              <h1>Mam nadzieje że się podobało!</h1>
            </div>
          </div>
              <div className="footer-bottom">
<h3>Wszelkie prawa zastrzeżone </h3>
</div>
    </footer>
    );
  };
  
  export default Footer;
  
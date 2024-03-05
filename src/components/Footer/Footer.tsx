import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Assuming you have a Footer.css for additional styling

const Footer: React.FC = () => {
  return (
    <footer className="text-white pt-4 pb-2 footer">
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="col-auto">
          <img src={`${process.env.PUBLIC_URL}/images/logo/logo-light.svg`} alt="Footer Logo" height="50" />
        </div>
        <div className="col-auto">
            <a href="https://www.google.com/maps/place/" target="_blank" rel="noopener noreferrer" className="icons-footer" aria-label="Find on Google Maps">
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
            <a href="mailto:casasostoa@gmail.com" className="icons-footer" aria-label="Send email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://twitter.com/casasostoa" target="_blank" rel="noopener noreferrer" className="me-2 icons-footer" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} /> {/* Corrected icon */}
            </a>
            <a href="https://www.instagram.com/casasostoa/" target="_blank" rel="noopener noreferrer" className="me-2 icons-footer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
      </div>
        <div className="row text-center mb-3">
          <div className="col-12">
            <a href="https://www.google.com/maps/place/C.+H%C3%A9roe+de+Sostoa,+142,+Carretera+de+C%C3%A1diz,+29003+M%C3%A1laga/@36.7042809,-4.4427876,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77f3653850d:0xb1763a3001ba712a!8m2!3d36.7042809!4d-4.4402073!16s%2Fg%2F11n73q45h5?entry=ttu" target="_blank" rel="noopener noreferrer" className="me-3 footer-link">Dirección: C/Héroe de Sostoa 142, Málaga. (metro princesa - huelin) Se proporcionarán los datos concretos al contactar</a>
          </div>
        </div>
        <div className="row text-center mb-3">
          <div className="col-12">
          <Link to="/" className="me-3 footer-link">Expo Actual</Link>
          <Link to="/pasadas" className="me-3 footer-link">Pasadas</Link>
          <Link to="/proximas" className="me-3 footer-link">Próximas</Link>
          <Link to="/eventos" className="me-3 footer-link">Eventos</Link>
          <Link to="/acerca" className="me-3 footer-link">Acerca</Link> 
          <Link to="/contacto" className="me-3 footer-link">Contacto</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copy">
            &copy; Casa Sostoa, Málaga, 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPerson, faMessage, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import './Contacto.css';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';

const Contacto: React.FC = () => {
  // Placeholder function for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted. Replace this with actual submission logic.');
  };

  return (
    <div>
    <h1 className="title text-center animate__animated animate__fadeIn animate__slower">Contacto</h1>
    <Breadcrumb />
    <div className="container my-5"> 
    <div className="row justify-content-center section">
      <div className="col-md-6">
        <p>Para ponerse en contacto con nosotros, puede llenar el formulario a continuación o utilizar la información de contacto proporcionada.</p>
        <p>
          <strong>
            <a href="https://www.google.com/maps/place/" target="_blank" rel="noopener noreferrer" className="custom-link">
              <FontAwesomeIcon icon={faLocationDot} /> Dirección:<br />
              C. Héroe de Sostoa, 142,<br />
              Carretera de Cádiz,<br />
              29003 Málaga
            </a>
          </strong>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:casasostoa@gmail.com" className="custom-link">casasostoa@gmail.com</a>
        </p>
      </div>
      <div className="col-md-6">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><FontAwesomeIcon icon={faPerson} /> Nombre:</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Tu Nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email:</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Tu Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message"><FontAwesomeIcon icon={faMessage} /> Mensaje:</label>
            <textarea className="form-control" id="message" name="message" rows={5} placeholder="Tu Mensaje" required></textarea>
          </div>
          <button type="submit" className="btn-custom">Enviar <FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </div>
    </div>
  </div>
  </div>  
  );
};

export default Contacto;

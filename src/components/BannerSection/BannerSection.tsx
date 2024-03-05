import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-light-svg-icons';
import 'animate.css/animate.min.css';
import './BannerSection.css'

const BannerSection: React.FC = () => {
  // Define the background image URL using process.env.PUBLIC_URL
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/Images/Banner/banner.jpg`;  
  return (
    <div className="banner-section" style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="animate__animated animate__fadeInDown animate__slower">Próxima Convocatoria Abril 2024</h2>
            <p className="animate__animated animate__fadeInDown animate__slower">
              ¿Quieres exponer? <a href="mailto:casasostoa@gmaii.com" className="link">Mándanos un correo <FontAwesomeIcon icon={faPaperPlane} /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

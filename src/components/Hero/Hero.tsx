import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import './Hero.css';
import 'animate.css/animate.min.css'; 

const Hero: React.FC = () => {
  // Define the background image URL using process.env.PUBLIC_URL
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/Images/Hero/hero-image.jpg`;
  
  return (
    <div className="hero-section" style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="hero-text">
        <h1 className="animate__animated animate__fadeInUp animate__slower">Nombre Artista</h1>
        <h2 className="animate__animated animate__fadeInUp animate__slower">Nombre Expo</h2>
        <p className="animate__animated animate__fadeInUp animate__slower">Fechas: XX/XX al XX/XX</p>
        <a href="#" className="btn btn-custom animate__animated animate__fadeInUp animate__slower" aria-label="Scroll down to artist">
          Leer más <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';

const AboutSection: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Casa Sostoa</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
          <a href="acerca.html" className="btn-custom" aria-label="Go to about us">
            Leer más sobre Casa Sostoa <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-about/home-about.jpg`} className="img-fluid" alt="Pedro Alarcon" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

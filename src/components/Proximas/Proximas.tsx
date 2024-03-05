// src/components/Proximas/Proximas.tsx
import React from 'react';
import 'animate.css/animate.min.css'; 
import ArtistExpo from '../ArtistExpo/ArtistExpo';
import ImageGrid from '../ImageGrid/ImageGrid';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';

const Proximas: React.FC = () => {
  return (
    <div>
      <h1 className="title text-center animate__animated animate__fadeIn animate__slower">Próximas Exposiciones</h1>
      <Breadcrumb />
      <ArtistExpo />
      <ImageGrid />
    </div>
  );
};

export default Proximas;

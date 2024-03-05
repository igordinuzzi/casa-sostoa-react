import React from 'react';

const ArtistExpo: React.FC = () => {
  return (
    <div>
        <div className="container">
      <h1 className="mt-5" id="artista">Nombre Artista</h1>
      <h2 className="mt-5">Nombre Expo</h2>
      <p>Fechas: XX/XX al XX/XX</p>
      
      <div className="row">
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        </div>
        <div className="col-md-6">
          <p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArtistExpo;

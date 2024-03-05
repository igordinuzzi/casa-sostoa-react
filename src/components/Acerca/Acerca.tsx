import React from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';
import 'animate.css/animate.min.css'; // Ensure animate.css is installed and imported if needed
import News from '../News/News';

const newsItems = [
    {
      title: "Casa Sostoa apuesta por el arte femenino",
      description: "La exposición de la artista Silvia Lermo, ‘La belleza y el empeño de sobrevivir’, se podrá visitar hasta el día 2 de octubre",
      imageUrl: `${process.env.PUBLIC_URL}/Images/News/news-01.jpg`,
      articleUrl: "https://www.laopiniondemalaga.es/cultura-espectaculos/2023/09/25/casa-sostoa-apuesta-arte-femenino-92510051.html",
      date: "25/09/23",
      source: "La Opinión de Málaga"
    },
    {
        title: "Casa Sostoa apuesta por el arte femenino",
        description: "La exposición de la artista Silvia Lermo, ‘La belleza y el empeño de sobrevivir’, se podrá visitar hasta el día 2 de octubre",
        imageUrl: `${process.env.PUBLIC_URL}/Images/News/news-01.jpg`,
        articleUrl: "https://www.laopiniondemalaga.es/cultura-espectaculos/2023/09/25/casa-sostoa-apuesta-arte-femenino-92510051.html",
        date: "25/09/23",
        source: "La Opinión de Málaga"
      },
      {
        title: "Casa Sostoa apuesta por el arte femenino",
        description: "La exposición de la artista Silvia Lermo, ‘La belleza y el empeño de sobrevivir’, se podrá visitar hasta el día 2 de octubre",
        imageUrl: `${process.env.PUBLIC_URL}/Images/News/news-01.jpg`,
        articleUrl: "https://www.laopiniondemalaga.es/cultura-espectaculos/2023/09/25/casa-sostoa-apuesta-arte-femenino-92510051.html",
        date: "25/09/23",
        source: "La Opinión de Málaga"
      },  
    
  ];

const Acerca: React.FC = () => {
  return (
    <main>
    <h1 className="title text-center animate__animated animate__fadeIn animate__slower">Acerca Casa Sostoa</h1>
    <div className="container">
      <Breadcrumb />
      
      {/* First Row */}
      <div className="row">
        <div className="col-md-6">
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>

<p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>
        </div>
        <div className="col-md-6">
          {/* Adjusted alt text */}
          <img src={`${process.env.PUBLIC_URL}/Images/About/about-1.jpg`} className="img-fluid" alt="Decorative art at Casa Sostoa" />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="row mt-5">
        <div className="col-md-6">
          {/* Adjusted alt text */}
          <img src={`${process.env.PUBLIC_URL}/Images/About/about-2.jpg`} className="img-fluid" alt="Artwork display at Casa Sostoa" />
        </div>
        <div className="col-md-6">
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>

<p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>
        </div>
      </div>
      
      {/* Third Row */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>
            
<p>Lorem ipsum dolor sit amet consectetur. Vel amet nunc erat et pharetra. Bibendum ac arcu urna lacus in congue tellus quisque. Ac et faucibus hac dictum odio sed. Sollicitudin purus sed arcu eleifend consectetur.</p>
        </div>
        <div className="col-md-6">
          {/* Adjusted alt text */}
          <img src={`${process.env.PUBLIC_URL}/Images/About/about-3.jpeg`} className="img-fluid" alt="Gallery view inside Casa Sostoa" />
        </div>
      </div>
    </div>
    
    {/* News Section */}
    <News items={newsItems} />
    
  </main>
  );
};

export default Acerca;

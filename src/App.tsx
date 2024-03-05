import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import ArtistExpo from './components/ArtistExpo/ArtistExpo';
import ImageGrid from './components/ImageGrid/ImageGrid';
import AboutSection from './components/AboutSection/AboutSection';
import BannerSection from './components/BannerSection/BannerSection';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
// Import other components you might route to
import Proximas from './components/Proximas/Proximas'; // Example new component for routing
import Pasadas from './components/Pasadas/Pasadas'
import Eventos from './components/Eventos/Eventos';
import Acerca from './components/Acerca/Acerca';
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ScrollProgressBar />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ArtistExpo />
              <ImageGrid />
              <AboutSection />
              <BannerSection />
            </>
          } />
          <Route path="/pasadas" element={<Pasadas />} />
          <Route path="/proximas" element={<Proximas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
}

export default App;

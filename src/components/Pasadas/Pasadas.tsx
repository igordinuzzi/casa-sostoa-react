import React, { useState } from 'react';
import 'animate.css/animate.min.css';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';
import ArtistSearch from '../ArtistSearch/ArtistSearch';
import ArtistExpo from '../ArtistExpo/ArtistExpo'
import ImageGrid from '../ImageGrid/ImageGrid'

const Proximas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('artist1');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'artist1':
        return <div>
            <ArtistExpo />
            <ImageGrid />
        </div>; // Replace with actual content/component
      case 'artist2':
        return <div>
            <ArtistExpo />
            <ImageGrid />
        </div>; // Replace with actual content/component
      case 'artist3':
        return <div>
            <ArtistExpo />
            <ImageGrid />
        </div>; // Replace with actual content/component
      default:
        return <div>Content for Artist 1</div>; // Default case
    }
  };

  return (
    <div>
      <h1 className="title text-center animate__animated animate__fadeIn animate__slower">Exposiciones Pasadas</h1>
      <Breadcrumb />
      <ArtistSearch />
      <div className="d-flex justify-content-center">
      <div className="btn-group" role="group" aria-label="Artist Tabs">
        <button type="button" className={`btn-custom ${activeTab === 'artist1' ? 'active' : ''}`} onClick={() => setActiveTab('artist1')}>Artist 1</button>
        <button type="button" className={`btn-custom ${activeTab === 'artist2' ? 'active' : ''}`} onClick={() => setActiveTab('artist2')}>Artist 2</button>
        <button type="button" className={`btn-custom ${activeTab === 'artist3' ? 'active' : ''}`} onClick={() => setActiveTab('artist3')}>Artist 3</button>
      </div>
      </div> 
      {renderTabContent()}
    </div>
  );
};

export default Proximas;

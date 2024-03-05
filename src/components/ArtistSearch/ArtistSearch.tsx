import React, { useState } from 'react';

const ArtistSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const artists = ['Nombre Artista 1', 'Nombre Artista 2', 'Nombre Artista 3'];

  // Filter artists based on query
  const filteredArtists = query
    ? artists.filter(artist => artist.toLowerCase().includes(query.toLowerCase()))
    : []; // Start with an empty array if no query is entered

  return (
    <div>
      <div className="search-field mb-3 container">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center"> {/* Use text-center to align text horizontally */}
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
            <div key={index} className="artist-name">{artist}</div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}> {/* Additional styling for vertical centering */}
            No artists found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistSearch;

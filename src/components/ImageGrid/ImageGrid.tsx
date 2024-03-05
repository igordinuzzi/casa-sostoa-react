import React from 'react';

const ImageGrid: React.FC = () => {
  // You can make the image paths and alt texts props for a more dynamic component
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-12">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-3.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={`${process.env.PUBLIC_URL}/Images/Home-gallery/Grid-1.jpg`} className="img-fluid" alt="Painting Expo by RawPixel" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

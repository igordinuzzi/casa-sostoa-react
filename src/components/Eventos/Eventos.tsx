import React from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumbs';
import Calendar from 'react-calendar';
import './Eventos.css' // Import default styles

const Eventos: React.FC = () => {
  return (
    <div>
    <h1 className="title text-center animate__animated animate__fadeIn animate__slower">Eventos</h1>
    <Breadcrumb />
    <div className="row section">
      {/* Calendar Column */}
      <div className="col-md-6 calendar" aria-label="Event Calendar">
          <Calendar />
        </div>
      
      {/* Event Items Column */}
      <div className="col-md-6 event-items" aria-label="Event Details">
        {/* Example Event Item */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Event Title</h5>
            <p className="card-text">Event Description</p>
          </div>
        </div>
        {/* Repeat for other events as needed */}
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Another Event Title</h5>
            <p className="card-text">Another Event Description</p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Another Event Title</h5>
            <p className="card-text">Another Event Description</p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Another Event Title</h5>
            <p className="card-text">Another Event Description</p>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default Eventos;

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  // State to manage navbar collapse
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to toggle navbar collapse
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Define a function to set the class name dynamically
  const setActiveLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
      <Link to="/" className="navbar-brand"> {/* Replace <a> with <Link> */}
        <img src={`${process.env.PUBLIC_URL}/Images/Logo/logo-light.svg`} alt="Logo" style={{ width: '100px' }} />
      </Link>
      <button className="navbar-toggler" type="button" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/pasadas" className={setActiveLinkClass}>Pasadas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/proximas" className={setActiveLinkClass}>Próximas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/eventos" className={setActiveLinkClass}>Eventos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/acerca" className={setActiveLinkClass}>Acerca</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" className={setActiveLinkClass}>Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

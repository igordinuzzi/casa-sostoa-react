import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css'; // Add your styling as needed

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="container">
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        {/* Always show Home link */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                name
              ) : (
                <Link to={routeTo}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </div>
  );
};

export default Breadcrumb;

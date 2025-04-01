import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Dashboard Rezerwacji Hotelowych</h1>
        </div>
        <div className="header-actions">
          <Link to="/add" className="btn btn-primary me-3">Dodaj rezerwację</Link>
          <div className="date-display">
            {new Date().toLocaleDateString('pl-PL', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
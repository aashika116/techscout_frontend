import React from 'react';
import { FaHome, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link instead of a href
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="./logo192.png" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <Link to="/home" className="nav-item">
          <FaHome /> Home
        </Link>
        <Link to="/settings" className="nav-item">
          <FaCog /> Settings
        </Link>
        <Link to="/profile" className="nav-item">
          <FaUser /> User
        </Link>
        <Link to="/logout" className="nav-item">
          <FaSignOutAlt /> Sign Out
        </Link>
      </nav>
    </header>
  );
};

export default Header;

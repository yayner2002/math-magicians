import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: '#fff',
    textDecoration: 'none',
  };
  return (
    <nav>
      <div className="nav-content">
        <Link to="/home" style={navStyle}>
          <h3>
            Math Magicians
          </h3>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/home">
            <li>Home</li>
          </Link>
          <Link to="/calculator" style={navStyle}>
            <li>Calculator</li>
          </Link>
          <Link to="/quote" style={navStyle}>
            <li>Quote</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar wrapper">
        <ul className="links">
          <li>
          <Link to="/featured">Featured</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className="logo">
          <Link to="/">
            <h2>Immemorial</h2>
          </Link>
        </div>
        <div className="favourit-link">
          <Link to="/favourites">Favourites</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
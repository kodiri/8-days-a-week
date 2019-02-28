import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css';

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="container">
        <div className="nav-bar">
          <div className="header-logo">
            <Link to="/">
              <header>8 Days a Week</header>
            </Link>
          </div>
          <nav id="navigation">
            by Alpha Team />
          </nav>
        </div>
      </div>
    </div>
  )
}
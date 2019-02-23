import React from 'react';
import CryptoCard from '../crypto/crypto';
import { Link } from 'react-router-dom';
import '../header/header.css';

export default function Nav() {
  const coinData = {
    name: 'Bitcoin',
    symbol: 'BTC',
  } 
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
            <CryptoCard
              name={coinData.name}
              symbol={coinData.symbol}
            /> 
          </nav>
        </div>
      </div>
    </div>
  )
}
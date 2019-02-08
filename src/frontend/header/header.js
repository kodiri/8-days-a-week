import React from 'react';
import ReactTextRotator from 'react-text-rotator';
import './header.css';
import CryptoCard from '../crypto/crypto';


export default function Header() {
  const coinData = {
    name: 'Bitcoin',
    symbol: 'BTC',
  }

    return (
      <div className="Header" id="header-section">
        <div className="nav-container">
          <div className="container">
            <div className="nav-bar">
              <div className="header-logo">
                <header>8 Days a Week</header>
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
        <div className="container">
          <div className="welcome-area">
            <div className="header-text text-center">
              <MyComponent />
            </div>
            <div className='arrow'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

const content = [
  {
    text: 'Frontend Developer',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'Design Lover',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'IT Learner',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'Love IT',
    className: 'classA',
    animation: 'fade',
  },
];

const MyComponent = () => (
  <div>
    <h2 id="textRotator">I'm Coding Woman</h2>
    <ReactTextRotator
      content={content}
      time={3000}
      startDelay={1000}
    />
  </div>
);

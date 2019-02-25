import React from 'react';
import ReactTextRotator from 'react-text-rotator';
import './header.css';
import Nav from '../Nav/Nav';
import { HashLink as Link } from 'react-router-hash-link';


export default function Header() {
    return (
      <div className='Header'>
        <Nav />
        <div className="container">
          <div className="welcome-area">
            <div className="header-text text-center">
              <MyComponent />
            </div>
            <div className='arrow'>
              <Link to="/#timeline">
                <span></span>
                <span></span>
                <span></span>
              </Link>
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

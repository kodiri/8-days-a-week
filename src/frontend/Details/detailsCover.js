import React from 'react';
import './Details.css';
import { Link } from 'react-router-dom';

// import Header from '../header/header.js';
export default function Details() {
  return (
    <div>
      <div className='details-box'>
        <a className='details-a' href="https://google.com">
          <img className='details-img' src={require('./testImages/posture.png')} alt='posture' />
        </a>
      </div>
      <div className='details-box'>
        <p>
          “I have very personally felt the overwhelming loneliness, self-doubt, and frustration that often comes with the minority status of a woman in engineering. As much as I can help others get through or avoid those difficult stretches that I myself had to weather, I’d like to. As a bonus, the more women (and minorities) that enter and don’t leave the field, the better it all gets for everyone, including me!”
					</p>
        <p className='details-quoter'>
          Tracy Chou, Software Engineer at Pinterest
					</p>
      </div>
      <div className='details-box'>
        <a className='details-a' href="https://google.com">
          <img className='details-img' src={require('./testImages/food.png')} alt='food' />
        </a>
      </div>
    </div>
    <div className='details-container'>
      <div className='details-box'>
        <h2 className='details-center-text'>Women in coding: <a className='details-a' href="https://en.wikipedia.org/wiki/Tracy_Chou" target='_blank' rel="noopener noreferrer"><u>Tracy Chou</u></a></h2>
      </div>
      <div className='details-box'>
        <div className="details-imgWrap">
          <img className='details-img' src={require('./testImages/person.png')} alt='person' />
        </div>
      </div>
      <div className='details-box'>
        <p>Tracy Chou is a software engineer and advocate for diversity in her field. She has prior work experience at Pinterest, Quora and internship experience at Rocket Fuel, Google, and Facebook.</p>
        <br />
        <p><a className='details-a' href="https://medium.com/@triketora" target="_blank" rel="noopener noreferrer">Learn more ...</a></p>
        <Link to='/'>Back to home page</Link>
      </div>
    </div>
    );
}
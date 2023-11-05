import React from 'react';
import '../styles/landing.css';
import Header from './Header';

export const Landing = () => {
  return (
    <div className="landing">
      <Header />

      <main>
        <div className="landing-heading">
          <img align="middle" className="landing-logo" src={require('../images/logo.png')} alt="" />
          <h1 className="landing-header">Split expenses with friends.</h1>
          <p className="landing-desc">
            <strong>Share</strong> bills. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web
          </p>
          <div className="button-container">
            <div className="image-container">
              <img className="landing-big" src={require('../images/dsiplay.png')} alt="" />
            </div>
            <div className="button-wrapper">
            <h1  >Splitting expenses has </h1><h2>never been easier .</h2> 
                <ul>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Share bills,</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Make sure everyone gets paid back</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Totally Free.</li>
                </ul>
                <div class="button-center-1">
                <a href="http://localhost:3000/signup">
                    <button className="landing-button">Get Started</button>
                </a>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

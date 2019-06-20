import React from 'react';
import { Carousel } from 'bootstrap';
import './Landing.css';
import { Navbar } from 'bootstrap';

const Landing = () => (
  <section className="landing">

    <div className="hero-image">
      <h1 className="hero-title"><a href="/library">Turn the music <span>UP!</span></a></h1>
    </div>

    {/*Sellings Points*/}

      <div className="sellingpoints-container">

        <div className="selling-point-1" >
          <img src="/assets/images/landing_page/vinyl-records-945396_1920.jpg" width="300" height="250" alt="" />
          <div className="selling-descriptions">
            <span className="music-note"><ion-icon name="ios-musical-notes"></ion-icon></span>
            <h3 className="point-title">Choose your music</h3>
            <p className="point-description">The world is full of music. Why should you have to listen to music that someone else chose?</p>
          </div>
        </div>

        <div className="selling-point-2" >
          <div className="selling-descriptions">
            <span className="streaming-icon"><ion-icon name="ios-radio"></ion-icon></span>
            <h3 className="point-title">Unlimited, streaming, ad-free</h3>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <img src="/assets/images/landing_page/bodybuilder-925770_1920.jpg" width="300" height="250" alt="" />
        </div>

        <div className="selling-point-3" >
          <img src="/assets/images/landing_page/mobile_adults.jpg" width="300" height="250" alt="" />
          <div className="selling-descriptions">
            <span className="phone-icon"><ion-icon name="phone-portrait"></ion-icon></span>
            <h3 className="point-title">Mobile enabled</h3>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>

      </div>

      <nav className="navbar fixed-bottom navbar-custom">
        <a className="portfolio-site" href="https://www.lmariemeehan.com" target="_blank">Laura Meehan</a>
        <div className="github-site">
        <span className="github-icon"><ion-icon className="logo-github"></ion-icon></span>
          <a className="github" href="https://github.com/lmariemeehan" target="_blank">GitHub</a>
        </div>
      </nav>

  </section>
);

export default Landing;

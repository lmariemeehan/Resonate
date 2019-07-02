import React from 'react';
import { Carousel } from 'bootstrap';
import '../styles/Landing.css';
import { navbar, containerFluid, row, col } from 'bootstrap';

const Landing = () => (
  <section className="landing">

    <div className="hero-image">
      <h1 className="hero-title"><a href="/library">Turn the music <span>up!</span></a></h1>
    </div>

    <h2 className="app-name">Resonate.</h2>

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3 className="point-title">Choose your music</h3>
          <img src="/assets/images/landing_page/vinyl-records-945396_1920.jpg" className="top-img" alt="..." />
          <p className="point-description">The world is full of music. Why should you have to listen to music that someone else chose?</p>
          <span className="music-note"><ion-icon name="ios-musical-notes"></ion-icon></span>
        </div>
        <div className="col">
          <h3 className="point-title">Unlimited, streaming, ad-free</h3>
          <img src="/assets/images/landing_page/bodybuilder-925770_1920.jpg" className="top-middle-img" alt="..." />
          <p className="point-description">No arbitrary limits. No distractions.</p>
          <span className="streaming-icon"><ion-icon name="ios-radio"></ion-icon></span>
          </div>
        <div className="col">
          <h3 className="point-title">Mobile enabled</h3>
          <img src="/assets/images/landing_page/mobile_adults.jpg" className="top-img" alt="..." />
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          <span className="phone-icon"><ion-icon name="phone-portrait"></ion-icon></span>
        </div>
      </div>
    </div>

    <nav className="navbar fixed-bottom navbar-custom">
      <a className="portfolio-site" href="https://www.lmariemeehan.com" target="_blank">Laura Meehan</a>
      <div className="github-site">
      <span className="github-icon"><ion-icon className="logo-github" size="large"></ion-icon></span>
        <a className="github" href="https://github.com/lmariemeehan" target="_blank">GitHub</a>
      </div>
    </nav>

  </section>
);

export default Landing;

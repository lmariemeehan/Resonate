import React from 'react';
import { Carousel } from 'bootstrap';
import './Landing.css';
import { Navbar, CardColumns, Card } from 'bootstrap';

const Landing = () => (
  <section className="landing">

    <div className="hero-image">
      <h1 className="hero-title"><a href="/library">Turn the music <span>up!</span></a></h1>
    </div>

    <h2>Resonate.</h2>

    <div className="sellingpoints-container">
      <div className="card-columns">
        <div className="card">
          <img src="/assets/images/landing_page/vinyl-records-945396_1920.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4><span className="music-note"><ion-icon name="ios-musical-notes"></ion-icon></span></h4>
            <h5 className="card-title">Choose your music</h5>
          </div>
        </div>
          <div className="card text-center">
            <div className="card-body-music-choices">
              <p className="card-text">The world is full of music. Why should you have to listen to music that someone else chose?</p>
            </div>
          </div>
          <div className="card text-center">
            <div className="card-body-streaming">
              <p className="card-text">No arbitrary limits. No distractions.</p>
            </div>
          </div>
        <div className="card">
          <img src="/assets/images/landing_page/bodybuilder-925770_1920.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4><span className="streaming-icon"><ion-icon name="ios-radio"></ion-icon></span></h4>
            <h5 className="card-title">Unlimited, streaming, ad-free</h5>
          </div>
        </div>
        <div className="card">
          <img src="/assets/images/landing_page/mobile_adults.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4><span className="phone-icon"><ion-icon name="phone-portrait"></ion-icon></span></h4>
            <h5 className="card-title">Mobile enabled</h5>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body-mobile">
            <p className="card-text">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
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

import React from 'react';
import { Carousel } from 'bootstrap';
import './Landing.css';

const Landing = () => (
  <section className="landing">

    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
      /* Slide One */
        <div className="carousel-item active">
          <img src="/assets/images/landing_page/fantasy-3761246_1920.jpg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="hero-title"><a href="/library">Turn the music <span>up!</span></a></h1>
            <span className="music-note"><ion-icon name="ios-musical-notes"></ion-icon></span>
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>
        </div>

        /* Slide Two */
        <div className="carousel-item">
          <img src="/assets/images/landing_page/djsilhouette.jpg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <span className="streaming-icon"><ion-icon name="ios-radio"></ion-icon></span>
              <h2 className="point-title">Unlimited, streaming, ad-free</h2>
              <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
        </div>

        /* Slide Three */
        <div className="carousel-item">
          <img src="/assets/images/landing_page/mobile_adults.jpg" className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <span className="phone-icon"><ion-icon name="phone-portrait"></ion-icon></span>
              <h2 className="point-title">Mobile enabled</h2>
              <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>

  </section>
);

export default Landing;

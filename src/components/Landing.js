import React from 'react';
import { Carousel } from 'bootstrap';
import './Landing.css';

const Landing = () => (
  <section className="landing">

    <div className="landing_page">
      <h4 className="hero-title"><a href="/library">Turn the music <span>UP!</span></a></h4>
    </div>

    {/*Sellings Points*/}
      <div className="sellingpoints-container">

        <div className="selling-point" >
          <span className="music-note"><ion-icon name="ios-musical-notes"></ion-icon></span>
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>

        <div className="selling-point" >
          <span className="streaming-icon"><ion-icon name="ios-radio"></ion-icon></span>
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>

        <div className="selling-point" >
          <span className="phone-icon"><ion-icon name="phone-portrait"></ion-icon></span>
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>

      </div>

  </section>
);

export default Landing;

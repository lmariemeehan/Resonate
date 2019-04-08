import React from 'react';
import { Jumbotron, Button, Media } from 'react-bootstrap';
import './Landing.css';

const Landing = () => (
  <section className="landing">

    <div className="web-image">
       <h1 className="hero-title"><a href="/library">Turn the music up!</a></h1>
    </div>

    <section className="container">
      <div className="row">
      <div className="col-md">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>

      <div className="col-md">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>

      <div className="col-md">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
      </div>
    </section>

  </section>
);

export default Landing;

import React from 'react';
import { Jumbotron, Button, Media } from 'react-bootstrap';
import './Landing.css';

const Landing = () => (
  <section className="landing">
      <Jumbotron>
        <h1>Turn the music up!</h1>
        <p>
          Enjoy all the music Bloc Jams has to offer.
        </p>
        <p>
          <Button bsStyle="primary" href="/library">Library</Button>
        </p>
      </Jumbotron>

  <section className="selling-points">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" className="p-3 mb-2 bg-secondary text-white">
      <div className="carousel-item active">
        <img className="mw-100" className="mh-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="" />
          <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
   
      </div>
      <div className="carousel-item">
        <img className="mw-100" className="mh-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="" />
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="carousel-item">
        <img className="mw-100" className="mh-100" src="https://stocksnap.io/photo/BYZVQIEAOC" alt="" />
          <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
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
   
  </section>
);

export default Landing;
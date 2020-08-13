import React from 'react';
import '../styles/Landing.css';

const Landing = () => (
  <section className="landing">

    <div className="hero-image">
      <h1 className="hero-title"><a href="/library">Turn the music up!</a></h1>
    </div>

    <h2 className="app-name">Resonate</h2>

    <div className="container-fluid pb-4">
      <div className="selling-points">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-lg-3 text-center">
          <h3 className="text-white my-4">Choose your music</h3>
          <img className="my-3" src="/assets/images/landing_page/vinyl-records-minload.jpg"  alt="Girl looking through vinyl music" />
          <p className="point-description mt-2 mb-3">The world is full of music. Why should you have to listen to music that someone else chose?</p>
          <span className="music-note mb-3"><ion-icon name="musical-notes-sharp"></ion-icon></span>
        </div>
        <div className="col-lg-3 text-center">
          <h3 className="text-white my-4">Unlimited, streaming, ad-free</h3>
          <img className="my-3" src="/assets/images/landing_page/bodybuilder-min.jpg" alt="Man going for a run and listening to music with headphones" />
          <p className="point-description mt-2 mb-3">No arbitrary limits. No distractions.</p>
          <span className="streaming-icon mb-3"><ion-icon name="radio-sharp"></ion-icon></span>
          </div>
        <div className="col-lg-3 text-center">
          <h3 className="text-white my-4">Mobile enabled</h3>
          <img className="my-3" src="/assets/images/landing_page/mobile_adults-min.jpg" alt="Using the phone on the go" />
          <p className="point-description mt-2 mb-3">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          <span className="phone-icon mb-3"><ion-icon name="phone-portrait-sharp"></ion-icon></span>
        </div>
      </div>
      </div>
    </div>

    <nav className="navbar fixed-bottom navbar-custom mt-5">
      <a className="portfolio-site" href="https://laurameehan.netlify.app/" rel="noopener noreferrer" target="_blank">Laura Meehan</a>
      <div className="github-site">
        <a className="github" href="https://github.com/lmariemeehan" rel="noopener noreferrer" target="_blank">GitHub</a>
      </div>
    </nav>

  </section>
);

export default Landing;

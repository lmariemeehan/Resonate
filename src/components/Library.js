import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../styles/Library.css';

 class Library extends Component {
 	constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

   render() {
    return (

      <section className='library'>

      <div className='album-links'>
        {
          this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
                <div className="container">
                  <img className="album-images" src={album.albumCover} alt={album.title} />
                  <div className="middle">
                    <span className="play-album-icon"><ion-icon name="play-sharp"></ion-icon></span>
                  </div>
                </div>
                <div className="album-title">{album.title}</div>
                <div className="album-artist">{album.artist}</div>
                <div className="album-songs">{album.songs.length} songs</div>
              </Link>
          )
        }
        </div>

        <nav className="navbar fixed-bottom navbar-custom">
          <a className="portfolio-site" href="https://www.lmariemeehan.com" target="_blank" rel="noopener noreferrer">Laura Meehan</a>
          <div className="github-site">
            <a className="github" href="https://github.com/lmariemeehan" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </nav>

      </section>
     );
   }
 }

export default Library;

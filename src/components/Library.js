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
               <img className="album-images" src={album.albumCover} alt={album.title} />
               <div className="album_title">{album.title}</div>
               <div>{album.artist}</div>
               <div>{album.songs.length} songs</div>
                </Link>
          )
        }
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
   }
 }

export default Library;

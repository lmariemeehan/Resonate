import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import { Jumbotron, Button } from 'react-bootstrap';
import './Library.css';

 class Library extends Component {
 	constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

   render() {
    return (
      <section className='library'>

      <h1>Albums</h1>
      
      <div className='albumLinks'>
        {
          this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
               <img src={album.albumCover} alt={album.title} />
               <div bsStyle="default">{album.title}</div>
               <div>{album.artist}</div>
               <div>{album.songs.length} songs</div>
                </Link>
          )
        }
        </div>
      </section>

     );
   }
 }

export default Library;

import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import '../styles/Album.css';

class Album extends Component {
	constructor(props) {
     super(props);

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state = {
       album: album,
       currentSong: album.songs[0],
       currentTime: 0,
       duration: album.songs[0].duration,
       volume: album.songs[0].volume,
       isPlaying: false,
       isHovered: false
     };

     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;

   }

   componentDidMount() {
   	this.eventListeners = {
   		timeupdate: e => {
   		this.setState({ currentTime: this.audioElement.currentTime});
   		},
   		durationchange: e => {
   		this.setState({duration: this.audioElement.duration});
   		},
      volume: e => {
        this.setState({volume: this.audioElement.volume});
      }
   	};

	  this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
   	this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
   }

   componentWillUnmount() {
   	this.audioElement.src = null;
   	this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
   	this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
   }

   play() {
   	this.audioElement.play();
   	this.setState({isPlaying: true});
   }

   pause() {
   	this.audioElement.pause();
   	this.setState({isPlaying: false});
   }

   setSong(song) {
   	this.audioElement.src = song.audioSrc;
   	this.setState({ currentSong: song});
   }

   handleSongClick(song) {
   	const isSameSong = this.state.currentSong === song;
   	if (this.state.isPlaying && isSameSong) {
   		this.pause();
   	} else {
   		if (!isSameSong) { this.setSong(song);}
   		this.play();
   	}
   }

   handlePrevClick(){
   	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
   	const newSong = this.state.album.songs[newIndex];
   	this.setSong(newSong);
   	this.play();
   }

   handleNextClick() {
   	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
   	const newIndex = (currentIndex + 1) % (this.state.album.songs.length);
   	const newSong = this.state.album.songs[newIndex];
   	this.setSong(newSong);
   	this.play();
   }

	handleTimeChange(e) {
		const newTime = this.audioElement.duration * e.target.value;
		this.audioElement.currentTime = newTime;
		this.setState({currentTime: newTime});
	}

  formatTime(sec) {
     if( typeof (sec/1) !== "number" ) {
     return '-:--';
    }

   const minutes = Math.floor(sec / 60);
   const seconds = Math.floor(sec -  (minutes * 60));
   if (seconds < 10) {return minutes + " : 0" + seconds}
   return minutes + ":" + seconds;
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({volume: newVolume});
  }

	onMouseEnter(index){
	  this.setState({isHovered: index});
  }

  onMouseLeave(){
    this.setState({isHovered: null});
  }

  handleHoverButton(song, index) {
  	const isSameSong = this.state.currentSong === song;

    if (!this.state.isPlaying && isSameSong) {
      return <span className="play-icon"><ion-icon name="play-sharp"></ion-icon></span>;
     } else if (isSameSong && this.state.isPlaying) {
      return <span className="pause-icon"><ion-icon name="pause-sharp"></ion-icon></span>;
     } else if (index === this.state.isHovered) {
      return <span className="play-icon"><ion-icon name="play-sharp"></ion-icon></span>;
     } else {
      return <span>{index + 1}</span>;
     }
  }

   render() {
     return (
			<div className="container-fluid album-page">

				<section className="row pt-1 mb-5">
					<div className="col content text-white">
						<div className="album-info text-center">
						    <img src={this.state.album.albumCover} alt={this.state.album.title} height="280" width="320" className="rounded"/>
							<h1 className="mt-2" id="album-title">{this.state.album.title}</h1>
							<h2 id="artist">{this.state.album.artist}</h2>
							<div id="release-info">{this.state.album.releaseInfo}</div>
			        	</div>
						<div className="table-responsive-sm">
							<table className="table my-5 mx-auto w-50">
								<tbody>
								{this.state.album.songs.map( (song, index) =>
									<tr className="song" key={index} onClick= {() => this.handleSongClick(song)} onMouseEnter= {() => this.onMouseEnter(index)} onMouseLeave= {() => this.onMouseLeave()}>
									<th scope="row" className="song-number"> {this.handleHoverButton(song, index)} </th>
									<td className="song-title"> {song.title} </td>
									<td className="song-duration"> {this.formatTime(song.duration)} </td>
									</tr>
								)}
								</tbody>
							</table>
						</div>
					</div>
				</section>
				
				<div style={{height: "6rem"}}></div>

				<nav className="navbar fixed-bottom mt-0" style={{backgroundColor: "#371c5b"}}>
		      	<PlayerBar
					isPlaying={this.state.isPlaying}
					currentSong={this.state.currentSong}
					currentTime={this.audioElement.currentTime}
					formatTime={this.formatTime}
					duration={this.audioElement.duration}
							album={this.state.album}
					volume={this.audioElement.volume}
					handleSongClick={() => this.handleSongClick(this.state.currentSong)}
					handlePrevClick={() => this.handlePrevClick()}
					handleNextClick={() => this.handleNextClick()}
					handleTimeChange={(e) => this.handleTimeChange(e)}
					handleVolumeChange={(e) => this.handleVolumeChange(e)}
		      	/>
				</nav>

			</div>
     );
   }
 }

export default Album;

import React, { Component } from 'react';
import '../styles/PlayerBar.css';

class PlayerBar extends Component {
	render () {
		return (
			<div className="container">
				<section className="media text-white" id="mini-album">
					<img 
						className="mr-2" 
						src={this.props.album.albumCover} 
						width="60" height="60"
						alt="mini album cover" 
					/>
					<div className="media-body">
						<p className="text-uppercase mb-1">{this.props.album.artist}</p>
						<p>{this.props.currentSong.title}</p>
					</div>
				</section>
				<section className="play-time">
					<div id="buttons">
						<button id="previous" onClick={this.props.handlePrevClick}>
							<ion-icon name="play-back-outline"></ion-icon>
						</button>
						<button id="play-pause" onClick={this.props.handleSongClick}>
							{ this.props.isPlaying ?
								<ion-icon name="pause"></ion-icon> :
								<ion-icon name="play-sharp"></ion-icon>
							}
						</button>
						<button id="next" onClick={this.props.handleNextClick}>
							<ion-icon name="play-forward-outline"></ion-icon>
						</button>
					</div>
					<form id="time-control">
						<div className="form-row current-time">
							<div className="col-3">
								{this.props.formatTime( this.props.currentTime )}
							</div>
							<div className="col">
								<label htmlFor="seek-bar"></label>
								<input
									type="range"
									name="seek-bar"
									className="seek-bar"
									value= {(this.props.currentTime / this.props.duration) || 0}
									max="1"
									min="0"
									step="0.01"
									onChange={this.props.handleTimeChange}
								/>
							</div>
							<div className="col-3 total-time">
								{this.props.formatTime(this.props.duration)}
							</div>
						</div>
					</form>
				</section>
				<section className="" id="volume-control">
					<form className="form-row">
						<div className="col-3 pt-1">
							<ion-icon name="volume-high-sharp"></ion-icon>
						</div>
						<div className="col">
							<input
									type="range"
									className="seek-bar"
									volume= {this.props.volume}
									max="1"
									min="0"
									step="0.01"
									onChange={this.props.handleVolumeChange}
							/>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default PlayerBar;

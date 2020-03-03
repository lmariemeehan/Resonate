import React, { Component } from 'react';
import '../styles/PlayerBar.css';

class PlayerBar extends Component {
	render () {
		return (
			<div className="">

					<section className="text-white" id="mini-album">
						<img src={this.props.album.albumCover} width="60" height="60" className="float-left"/>
							<div id="player-album-info">
								<p className="ml-3 mb-0">{this.props.album.artist}</p>
								<p className="ml-3">{this.props.currentSong.title}</p>
							</div>
					</section>

					<section className="" id="play-time">
						<div id="buttons">
							<button id="previous" onClick={this.props.handlePrevClick}>
								<ion-icon name="play-back-outline"></ion-icon>
							</button>
							<button id="play-pause" onClick={this.props.handleSongClick}>
								{ this.props.isPlaying ?
									<ion-icon name="pause"></ion-icon> :
									<ion-icon name="play"></ion-icon>
								}
							</button>
							<button id="next" onClick={this.props.handleNextClick}>
								<ion-icon name="play-forward-outline"></ion-icon>
							</button>
						</div>

						<div id="time-control">
							<div className="current-time">{this.props.formatTime( this.props.currentTime )}</div>
							<input
								type="range"
								className="seek-bar"
								value= {(this.props.currentTime / this.props.duration) || 0}
								max="1"
								min="0"
								step="0.01"
								onChange={this.props.handleTimeChange}
							/>
							<div className="total-time">{this.props.formatTime(this.props.duration)}</div>
						</div>
					</section>

					<section className="" id="volume-control">
						<span className="icon ion-volume-high"></span>
							<input
								   type="range"
								   className="seek-bar"
								   volume= {this.props.volume}
								   max="1"
								   min="0"
								   step="0.01"
								   onChange={this.props.handleVolumeChange}
							/>
					</section>

			</div>
		);
	}
}

export default PlayerBar;

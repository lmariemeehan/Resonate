import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './PlayerBar.css'

class PlayerBar extends Component {
	render () {
		return (
			<Grid>
  			<Row className="show-grid" className="player-bar">

				<Col md={4}>
				<section id="time-control">
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
				</section>
				</Col>

				<Col md={4}>
				<section id="buttons">
					<button id="previous" onClick={this.props.handlePrevClick}>
						<span className="ion-skip-backward"></span>
					</button>
					<button id="play-pause" onClick={this.props.handleSongClick}>
						<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
					</button>
					<button id="next" onClick={this.props.handleNextClick}>
						<span className="ion-skip-forward"></span>
					</button>
				</section>
				</Col>

				<Col md={4}>
				<section id="volume-control">
					<div className="icon ion-volume-low"></div>
					<input
						   type="range"
						   className="seek-bar"
						   volume= {this.props.volume}
						   max="1"
						   min="0"
						   step="0.01"
						   onChange={this.props.handleVolumeChange}
					/>
					<div className="icon ion-volume-high">{this.props.volume}</div>
				</section>
				</Col>
			</Row>
			</Grid>
		);
	}
}

export default PlayerBar;

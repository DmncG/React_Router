import React from 'react';

const Footer = (props) => {
	const currentSong = props.currentSong;
	const songList = props.songList
	const isPlaying = props.isPlaying;
	const toggle = props.toggle;
	const next = props.next;
	const prev = props.prev;
	const progress = props.progress;
	return (
		<footer>
			<div class="pull-left">
			  <button className="btn btn-default" onClick={prev}>
			    <span className="glyphicon glyphicon-step-backward"></span>
			  </button>
			  <button className="btn btn-default" onClick={toggle}>
			    {
			    	isPlaying ? <span className="glyphicon glyphicon-pause"></span> : <span className="glyphicon glyphicon-play"></span> 
			    }
			  </button>
			  <button className="btn btn-default" onClick={next}>
			    <span className="glyphicon glyphicon-step-forward"></span>
			  </button>
			</div>
			<div className="bar">
			  <div className="progress">
		          <div className="progress-bar" style={{width: `${progress * 100}%`}, {height: '25px'}}></div>
		        </div>
			</div>
		</footer>
	)
}

export default Footer
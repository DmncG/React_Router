import React from 'react';
import Song from './Songs';

const Album = (props) => {
	const album = props.album;
	const currentSong = props.currentSong
	const isPlaying = props.isPlaying
	const toggle = props.toggle

	console.log('album', props)

	return (
		<div className="album col-xs-10">
		  <div>
		    <h3>I SHOULD BE AN ALBUM NAME</h3>
		    <img src={album.imageUrl} className="img-thumbnail" />
		  </div>
		  <table className='table'>
		    <thead></thead>
		  	<Song 
		  		songs = {album.songs}
		  		currentSong={currentSong}
		  		isPlaying = {isPlaying}
		  		toggle = {toggle}
		  	/>
		  </table>
		</div>
	)
}

export default Album;
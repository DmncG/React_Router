import React, {Component} from 'react';
import axios from 'axios';

import AUDIO from './../../audio';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Albums from './Albums';
import Album from './Album';


export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			selectedAlbum : {},
			albums : [],
			isPlaying : false,
			currentSong : {},
			songList : [],
			progress : 0
		}
		this.selectAlbum = this.selectAlbum.bind(this);
		this.deselectAlbum = this.deselectAlbum.bind(this);	
		this.toggle = this.toggle.bind(this);
		this.toggleOne = this.toggleOne.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}

	componentDidMount() {
		axios.get(`/api/albums/`)
			.then(res => res.data)
			.then(albums => {
				albums.forEach(album => {
					album.imageUrl = `/api/albums/${album.id}/image`
				})
				console.log("mutated albums", albums)
				return albums
			})
			.then(albums => this.setState({albums : albums}))

		AUDIO.addEventListener('ended', () => this.next());
    	AUDIO.addEventListener('timeupdate', () =>  {
    		this.setProgress(AUDIO.currentTime / AUDIO.duration)
    	});
		
	}

	setProgress (progress) {
	    this.setState({ progress: progress });
	  }

	play() {
		console.log('AUDIO', AUDIO)
		AUDIO.play()
		this.setState({isPlaying : true})
	}

	pause() {
		AUDIO.pause();

		this.setState({isPlaying : false})
	}

	load(song, songList) {
		AUDIO.src = song.audioUrl;
		AUDIO.load();
		this.setState({
			currentSong : song,
			songList : songList
		})
	}

	mod(num, m){
		return ((num % m) + m) % m
	}


	skip(interval, { songList, currentSong }){
	  let idx = songList.map(song => song.id).indexOf(currentSong.id);
	  idx = this.mod(idx + interval, songList.length);
	  const next = songList[idx];
	  return [next, songList];
	}

	startSong(song, songList) {
		this.pause();
		this.load(song, songList);
		this.play();
	}

	next () {
	    this.startSong(...this.skip(1, this.state));
	  }

	  prev () {
	    this.startSong(...this.skip(-1, this.state));
	  }


	toggle(song) {
		if (this.state.isPlaying) this.pause(); 
		else this.play();
	}

	toggleOne(song, songList) {
		if(song.id !== this.state.currentSong.id) {
			this.startSong(song, songList)
		} else {
			this.toggle();
		}
	}

	selectAlbum (albumId) {
		axios.get(`/api/albums/${albumId}`)
			.then(res => {
				let album = res.data;
				album.imageUrl = `/api/albums/${album.id}/image`; 
				console.log('$$$', album)
				album.songs = album.songs.map((song, idx) => {
					song.audioUrl = `/api/songs/${song.id}/audio`;
					return song;
				})
				return album;
			})
			.then(album => this.setState({selectedAlbum : album, songList : album.songs}))
			
	}

	deselectAlbum() {
		this.setState({selectedAlbum : {}})
	}

	render () {
		return (
			<div id="main" className="container-fluid">
				<div className="col-xs-2">
					<Sidebar deselect = {this.deselectAlbum}/>
				</div>
				<div className="col-xs-10">
				{
					this.state.selectedAlbum.id ? 
					<Album 
						album={this.state.selectedAlbum} 
						currentSong={this.state.currentSong}
						isPlaying={this.state.isPlaying}
						toggle={this.toggleOne}
					/> 
					: <Albums albums = {this.state.albums} selectAlbum = {this.selectAlbum}/>
				}
					<Footer 
						currentSong={this.state.currentSong}
						isPlaying = {this.state.isPlaying}
						toggle = {this.toggle}
						songList = {this.state.songList}
						next = {this.next}
						prev = {this.prev}
						progress = {this.state.progress}
					/>
				</div>
			</div>	
		)
	}
}
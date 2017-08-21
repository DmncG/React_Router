import React from 'react';

const Songs = (props) => {
	const songs = props.songs
	const currentSong = props.currentSong
	const isPlaying = props.isPlaying
	const toggle = props.toggle

	return(
		<tbody>
			{
				songs.map((song, idx) => {
					return (
						<tr key={idx} className={(song.id === currentSong.id && isPlaying) ? 'active' : 'null'}>
					        <td>
					          <button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
					            {	
					            	(song.id === currentSong.id && isPlaying) ? <span></span> : <span className="glyphicon glyphicon-play"></span>
					            }
					          </button>
					        </td>
					        <td>{song.name}</td>
					        <td>{song.artist}</td>
					        <td>{song.genre}</td>
					      </tr>

					)
				})
			}
		</tbody>
		
	   
	)
}

export default Songs
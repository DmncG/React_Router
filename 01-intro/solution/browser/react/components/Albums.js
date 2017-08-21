import React from 'react';

const Albums = (props) => {
	const albums = props.albums;
	const selectAlbum = props.selectAlbum;

	console.log("albums", props)
	return(
		<div>
			<h3>Albums</h3>
					{
						albums.map((album, idx) => {
							return (
								<div className="col-xs-4" key={idx}>
							      <a className="thumbnail" href="#" onClick = {() => selectAlbum(album.id)}>
							        <img src={album.imageUrl} />
							        <div className="caption">
							          <h5>
							            <span>{album.name}</span>
							          </h5>
							          <small>{album.songs.length}</small>
							        </div>
							      </a>
						    </div>)
						}
  						)
					}
		</div>
	)
}

export default Albums
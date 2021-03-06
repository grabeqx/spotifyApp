import React from 'react';

export const AlbumInfo = ({album, tracksLength}) => {
    let images = album.images || [];
    return (
        <div className="row flex">
            <div className="mr-3 mb-3">
                <img src={images.length > 1 ? images[1].url : images[0].url} />
            </div>
            <div className="album-desc mt-sm-3">
                <h1>{album.name}</h1>
                <h3>{album.album_type == 'album' ? album.artists[0].name : null}</h3>
                <h4>Ilość piosenek: ({tracksLength})</h4>
            </div>
        </div>
    )
}
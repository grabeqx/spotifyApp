import React from 'react';
import { Link } from 'react-router-dom';

export const Album = ({album}) => {
    return (
        <div className="col-sm-4">
            <Link to={`/album/${album.id}`}>
                <div className="card text-white bg-dark mb-3">
                    <img className="card-img-top" src={album.images[0].url} alt="Card image cap" />
                    <div className="card-header">{album.artists[0].name}</div>
                    <div className="card-body">
                        <h4 className="card-title">{album.name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )

}
import React from 'react';
import { Link } from 'react-router-dom';

export const Album = ({album}) => {
    return (
        <div className="col-sm-3 album-card">
            <Link to={{
                pathname: `/album/${album.id}`,
                state: album
            }}>
                <div className="card text-white mb-3">
                    <img className="card-img-top" src={album.images[0].url} alt="Card image cap" />
                    <div className="card-header">{album.name}</div>
                </div>
            </Link>
        </div>
    )

}
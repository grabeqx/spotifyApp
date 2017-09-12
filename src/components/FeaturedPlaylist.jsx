import React from 'react';
import ReactDOM from 'react-dom';

import { Playlist } from './Cards';

class FeaturedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.props.getPlaylists();
    }

    render() {
        return (
            <div className="row">
                <Playlist playlists={this.props.spotify.playlists}/>
            </div>
        )
    }
}

export default FeaturedPlaylist;
import React from 'react';
import ReactDOM from 'react-dom';

import { AlbumInfo } from './shared';
import Playlist from './Playlist';

class UserPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: this.props.location.state,
            tracks: []
        }
    }

    componentWillMount() {
        this.props.actions.setAlbum(this.state.playlist);
        this.props.actions.getPlaylistTracks(this.state.playlist.tracks.href);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            playlist: nextProps.app.currentAlbum.album,
            tracks: nextProps.app.currentAlbum.tracks
        })
        
    }

    render() {
        return (
            <div>
                <div className="container content">
                    <AlbumInfo album={this.state.playlist} tracksLength={this.state.tracks.length}/>
                </div>
                <div>
                    <Playlist tracks={this.state.tracks} {...this.props}/>
                </div>
            </div>
        )
    }
}

export default UserPlaylist;
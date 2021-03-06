import React from 'react';
import ReactDOM from 'react-dom';

import { AlbumInfo } from './shared';
import Playlist from './Playlist';

class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: this.props.location.state,
            tracks: []
        }
    }

    componentWillMount() {
        this.props.actions.setAlbum(this.state.album);
        this.props.actions.getAlbumTracks(this.state.album.id);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state != nextProps.app.currentAlbum) {
            this.setState({
                album : nextProps.app.currentAlbum.album,
                tracks: nextProps.app.currentAlbum.tracks
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container content">
                    <AlbumInfo album={this.state.album} tracksLength={this.state.tracks.length}/>
                </div>
                <div>
                    <Playlist tracks={this.state.tracks} {...this.props}/>
                </div>
            </div>
        )
    }
}

export default AlbumDetails;
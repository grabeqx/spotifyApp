import React from 'react';
import ReactDOM from 'react-dom';
import { Album } from './Cards';

import { AlbumInfo } from './shared';
import Playlist from './Playlist';

class AlbumDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: this.props.app.currentAlbum.album,
            tracks: this.props.app.currentAlbum.tracks
        }
    }

    componentWillMount() {
        this.props.actions.setAlbum(this.props.location.state);
        this.props.actions.getAlbumTracks(this.props.location.state.id);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state != nextProps.app.currentAlbum) {
            this.setState({
                album: nextProps.app.currentAlbum.album,
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
                    <Playlist tracks={this.state.tracks}/>
                </div>
            </div>
        )
    }
}

export default AlbumDetails;
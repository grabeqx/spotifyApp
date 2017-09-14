import React from 'react';
import ReactDOM from 'react-dom';
import { Album } from './Cards';

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
        console.log(this.state);
        return (
            <div className="container content">
                <h1>{this.state.album.name}</h1>
            </div>
        )
    }
}

export default AlbumDetails;
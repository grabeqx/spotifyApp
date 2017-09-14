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
        this.props.actions.setAlbum({album: this.props.location.state});
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
                {this.state.album.name}
            </div>
        )
    }
}

export default AlbumDetails;
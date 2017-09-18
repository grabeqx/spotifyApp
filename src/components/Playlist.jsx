import React from 'react';
import ReactDOM from 'react-dom';

const Duration = ({time}) => {
    let minutes = Math.floor(time/60000);
    let seconds = Math.floor((time % 60000) / 1000).toFixed(0);
    return (
        <span className="duration">
            {minutes + ":" + (seconds < 10 ? 0 : '') + seconds }
        </span>
    )
}

const PlaylistItem = (props) => {
    return (
        <li className={'list-group-item text-white playlist-item d-flex px-2 py-2 align-items-center justify-content-between w-100 pr-2 ' + (props.track.preview_url == null ? 'disabled' : 'active') }>
            <a href="#" onClick={props.menagePlayBtn} className="play-icon mr-md-3 d-flex align-items-center">
                <img src={require('../assets/play.png')} className="d-none d-md-block"/>
                <h4 className="d-inline mb-0 ml-2">{props.track.name}</h4>
            </a>
            <Duration time={props.track.duration_ms}/>
        </li>
    )
}

class Playlist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tracks: []
        };

    }

    componentWillReceiveProps(nextProps) {
        if(this.state.tracks.length != nextProps.tracks) {
            this.setState({
                tracks: nextProps.tracks
            });
        }
    }

    menagePlayBtn(e, track, index) {
        e.preventDefault();
        let playlist = this.state.tracks.filter((track) => {
            if(track.preview_url != null) 
                return track;
        });
        let trackid = track.id;
        var newIndex = playlist.findIndex(function (element) {
            if (element.id == trackid) {
                return element
            }
        });
        this.props.actions.setPlayedPlaylist({
            playlist: playlist,
            playedTrack: track,
            playedIndex: newIndex
        })
    }

    render() {
        return (
            <div className="container playlist-container">
                <ul className="list-group mt-5">
                    {this.state.tracks.map((track, index) => (
                        <PlaylistItem key={index} track={track} menagePlayBtn={(e) => this.menagePlayBtn(e, track, index)} />
                    ))}
                </ul>
            </div>
        )
    }
}
Playlist.contextTypes = {
    store: React.PropTypes.object
}


export default Playlist;
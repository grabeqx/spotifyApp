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
        <li className="list-group-item text-white playlist-item d-flex px-2 py-2 align-items-center">
            <a href="#" onClick={props.menagePlayBtn} className="play-icon mr-3"><img src={require('../assets/play.png')} /></a>
            <div className="d-flex justify-content-between w-100 pr-2 align-items-center">
                <h4 className="d-inline mb-0">{props.track.name}</h4>
                <Duration time={props.track.duration_ms}/>
            </div>
        </li>
    )
}

class Playlist extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.actions.setPlayedPlaylist({
            playlist: this.state.tracks,
            playedTrack: track,
            playedIndex: index
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


export default Playlist;
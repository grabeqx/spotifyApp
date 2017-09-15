import React from 'react';
import ReactDOM from 'react-dom';


const PlaylistItem = ({track}) => {
    return (
        <li className="list-group-item text-white playlist-item">
            {track.name}
        </li>
    )
}

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: this.props.tracks || []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tracks: nextProps.tracks
        });
    }

    render() {
        return (
            <div className="container playlist-container">
                <ul className="list-group mt-5">
                    {this.state.tracks.map((track) => (
                        <PlaylistItem key={track.id} track={track} />
                    ))}
                </ul>
            </div>
        )
    }
}


export default Playlist;
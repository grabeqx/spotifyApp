import React from 'react';
import ReactDOM from 'react-dom';


const Controls = (props) => {
    return (
        <div className="d-flex flex-row controls align-items-center mr-5">
            <a href="#" className="step"><img src={require('../assets/back.png')} /></a>
            <a href="#" onClick={props.playTrack} className="mx-2"><img src={props.played ? require('../assets/pause.png') : require('../assets/play.png')} /></a>
            <a href="#" className="step"><img src={require('../assets/next.png')} /></a>
        </div>
    )
}

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.app.player;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            played: nextProps.app.player.played,
            playedTrack: nextProps.app.player.playedTrack,
            playedIndex: nextProps.app.player.playedIndex,
            playlist: nextProps.app.player.playlist
        })
    }

    playTrack(e) {
        e.preventDefault();
        var player = document.querySelector('#player');
        player.src = this.loadTrack(this.props.app.player.playedIndex);
        player.play();
    }

    loadTrack() {
        return this.props.app.player.playedTrack.preview_url
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <div className="track-image pr-4">
                    <img src="http://via.placeholder.com/100x100" />
                </div>
                <Controls playTrack={(e) => this.playTrack(e)} played={this.state.played}/>
                <audio id="player"></audio>
                <div className="track-description text-white d-flex align-items-center">
                    {this.state.playedTrack ? this.state.playedTrack.name : null}
                </div>
            </div>
        )
    }

}


export default Player;
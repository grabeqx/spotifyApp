import React from 'react';
import ReactDOM from 'react-dom';


const Controls = (props) => {
    return (
        <div className="d-flex flex-row controls align-items-center mr-5">
            <a href="#" onClick={props.playPrev} className="step"><img src={require('../assets/back.png')} /></a>
            <a href="#" onClick={props.menagePlay} className="mx-2"><img src={props.played ? require('../assets/pause.png') : require('../assets/play.png')} /></a>
            <a href="#" onClick={props.playNext} className="step"><img src={require('../assets/next.png')} /></a>
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
        }, function() {
            if(this.state.played) {
                var player = document.querySelector('#player');
                player.play();
            } else {
                var player = document.querySelector('#player');
                player.pause();
            }
        })
    }

    playTrack(e) {
        e ? e.preventDefault() : null;
        var player = document.querySelector('#player');
        this.props.actions.menagePlayer(true);
        player.play();
    }

    pauseTrack(e) {
        e ? e.preventDefault() : null ;
        var player = document.querySelector('#player');
        this.props.actions.menagePlayer(false);            
        player.pause();
    }

    playPrev(e) {
        e.preventDefault();
        let prevIndex = this.state.playedIndex - 1;
        let prevTrack = this.state.playlist[prevIndex];
        if(prevIndex < 0) {
            this.props.actions.stopPlay(false);
        } else {
            this.props.actions.playNext(prevIndex, prevTrack);
        }
    }

    playNext(e) {
        e ? e.preventDefault() : null;     
        let nextIndex = this.state.playedIndex + 1;
        let nextTrack = this.state.playlist[nextIndex];
        if(nextIndex === this.state.playlist.length) {
            this.props.actions.stopPlay(false);
        } else {
            this.props.actions.playNext(nextIndex, nextTrack);
        }
    }

    endedTrack(e) {
        this.playNext();
    }
    
    render() {
        return (
            <div className="d-flex flex-row">
                <Controls menagePlay={this.state.played ? (e) => this.pauseTrack(e) : (e) => this.playTrack(e)} playPrev={(e) => this.playPrev(e)} playNext={(e) => this.playNext(e)} played={this.state.played}/>
                <audio id="player" onEnded={this.endedTrack.bind(this)} src={this.state.playedTrack.preview_url ? this.state.playedTrack.preview_url : null}></audio>
                <div className="track-description text-white d-flex align-items-center">
                    {this.state.playedTrack ? this.state.playedTrack.name : null}
                </div>
            </div>
        )
    }

}


export default Player;
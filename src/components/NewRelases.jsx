import React from 'react';
import ReactDOM from 'react-dom';

import { Album } from './Cards';

class NewRelases extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.spotify;
    }
    componentWillMount() {
        this.props.actions.getNewReleases();
        this.props.actions.updateBg('https://wallpaperscraft.com/image/triangle_colored_background_dots_color_29875_2048x1152.jpg');
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.newReleases.length != nextProps.spotify.newReleases.length) {
            this.setState({
                newReleases: nextProps.spotify.newReleases
            });
        }
    }

    render() {
        return (
            <div className="container content">
                <div className="row mb-5 col-md-12">
                    <h1>New Relases:</h1>
                </div>            
                <div className="row">
                    {this.state.newReleases.map((album,index) => (
                        <Album key={index} album={album}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default NewRelases;
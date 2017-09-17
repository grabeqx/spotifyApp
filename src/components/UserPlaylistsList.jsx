import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const UserPlaylistItem = (props) => {
    return (
        <li className="list-group-item text-white">
            <Link to={{
                pathname: `/playlist/${props.item.id}`,
                state: props.item
            }} onClick={props.changePlaylist}>{props.item.name}</Link>
        </li>
    )
}


class UserPlaylistsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: this.props.app.userPLaylists
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.playlists.length != nextProps.app.userPLaylists.length) {
            this.setState({
                playlists: nextProps.app.userPLaylists
            })
        }
    }

    changePlaylist(item) {
        this.props.actions.setAlbum(item);
        this.props.actions.getPlaylistTracks(item.tracks.href);
    }   

    render() {
        return (
            <ul className="list-group">
                {this.state.playlists.map((item, index) => (
                    <UserPlaylistItem key={index} item={item} changePlaylist={this.changePlaylist.bind(this, item)}/>
                ))}
            </ul>
        )
    }
}

export default UserPlaylistsList;
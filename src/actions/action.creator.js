import axios from 'axios';
import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

const actionCreators = {
    getToken: function() {
        return {
            type: ACTIONS.GET_TOKEN,
            payload: SPOTIFY
        }
    },
    getNewReleases: function() {
        return {
            type: ACTIONS.GET_FEATURED_PLAYLISTS
        }
    },
    setAlbum: function(album) {
        return {
            type: ACTIONS.SET_ALBUM,
            payload: album
        }
    },
    getAlbumTracks: function(album) {
        return {
            type: ACTIONS.GET_ALBUM_TRACKS,
            payload: album
        }
    },
    updateBg: function(newBg) {
        return {
            type: ACTIONS.UPDATE_BG,
            payload: newBg
        }
    }
    
};

export default actionCreators;
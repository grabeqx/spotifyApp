import axios from 'axios';
import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

const actionCreators = {
    initApp: function() {
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
    },
    getPlaylistTracks: function(href) {
        return {
            type: ACTIONS.GET_PLAYLIST_TRACKS,
            payload: href
        }
    },
    setPlayedPlaylist: function(playlist) {
        return {
            type: ACTIONS.SET_PLAYED_PLAYLIST,
            payload: {
                playlist: playlist.playlist,
                playedTrack: playlist.playedTrack,
                playedIndex: playlist.playedIndex
            }
        }
    }
    
};

export default actionCreators;
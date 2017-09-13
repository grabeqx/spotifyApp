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
    }
    
};

export default actionCreators;
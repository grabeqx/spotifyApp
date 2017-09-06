import axios from 'axios';
import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

const actionCreators = {
    getToken: function() {
        return {
            type: ACTIONS.GET_TOKEN,
            payload: SPOTIFY
        }
    }
    
};

export default actionCreators;
import axios from 'axios';
import ACTIONS from '../constants/actions';
import SPOTIFY from '../constants/spotify';

const actionCreator = function (dispatch) {
    return {
        getToken(){
            var token = localStorage.getItem('token')
        
            if(!token){
                var match = window.location.hash.match(/#access_token=(.*?)&/);
                token = match && match[1];
                localStorage.setItem('token', token)
            }
            if(!token){
                localStorage.removeItem('token')
                window.location.replace(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY.CLINET_ID}&response_type=token&redirect_uri=${SPOTIFY.REDIRECT_URI}`);
            }
            axios.defaults.headers.common.Authorization = 'Bearer ' + token;
            return token;
        },
        
        fetchPlaylist: function() {
            
            axios.get('https://api.spotify.com/v1/browse/new-releases')
                .then( response => {
                    console.log(response);
                })
            
        }
    }
}

export default actionCreator;
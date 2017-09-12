import axios from 'axios';

const SpotifyApi = {
    
    getToken: function (data) {
        var token = localStorage.getItem('token');
    
        if(!token){
            var match = window.location.hash.match(/#access_token=(.*?)&/);
            token = match && match[1];
            localStorage.setItem('token', token);
        }
        if(!token){
            localStorage.removeItem('token')
            window.location.replace(`https://accounts.spotify.com/authorize?client_id=${data.CLINET_ID}&response_type=token&redirect_uri=${data.REDIRECT_URI}`);
        }
        axios.defaults.headers.common.Authorization = 'Bearer ' + token;
        return token;
    },

    getUser: function () {
        return axios.get('https://api.spotify.com/v1/me')
            .then(response => response.data);
    },

    getPlaylists: function() {
        return axios.get('https://api.spotify.com/v1/browse/new-releases')
            .then( response => {
                return response.data
            })
    }

}

export default SpotifyApi;
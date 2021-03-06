import axios from 'axios';

const SpotifyApi = {
    
    initApp: function(data) {
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

    getUser: function() {
        return axios.get('https://api.spotify.com/v1/me')
            .then(response => response.data);
    },

    getNewReleases: function() {
        return axios.get('https://api.spotify.com/v1/browse/new-releases')
            .then( response => response.data)
    },

    getAlbumTracks: function(album) {
        return axios.get(`https://api.spotify.com/v1/albums/${album}/tracks`)
            .then(response => response.data.items)
    },

    getUserPlaylist: function() {
        return axios.get('https://api.spotify.com/v1/me/playlists')
            .then(response => response.data)
    },

    getPlaylistTracks: function(href) {
        
        return axios.get(href)
            .then(response => {
                let data = response.data.items.map((item) => {
                    return item.track;
                })
                return data;
            })
    }

}

export default SpotifyApi;
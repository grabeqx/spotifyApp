import axios from 'axios';


const actionCreator = function (dispatch) {
    return {
        fetchPlaylist: function() {
            axios.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist')
                .then(response => {
                    console.log(response);
                });
            
        }
    }
}

export default actionCreator;
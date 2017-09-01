import createStore from './createStore';
import ACTIONS from '../constants/actions';

const AppStore = createStore({
    appName: 'SpotifyApp'
}, function(action) {

    switch (action.type) {

        case ACTIONS.LOAD_PLAYLIST:

            console.log("test");
            
        break;
        
    }

});

export default AppStore;
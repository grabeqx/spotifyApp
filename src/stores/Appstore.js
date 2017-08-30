import createStore from './createStore';
import ACTIONS from '../constants/actions';

const AppStore = createStore({

}, function(action) {

    switch (action.type) {

        case ACTIONS.LOAD_PLAYLIST:

            console.log("asdasd");
            
        break;
        
    }

});
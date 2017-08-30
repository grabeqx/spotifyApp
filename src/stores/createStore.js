import {EventEmitter} from 'events';


function createStore(initialState, actionHandler, extraMethods) {

    const CHANGE_EVENT = 'change';

    const store = Object.assign({}, EventEmitter.prototype, {

        state: initialState || {},

        emitchange: function() {
            this.emit(CHANGE_EVENT)
        },

        subscribe: function(callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeChcangeListaner: function (callback) {
            this.removeListener(callback);
        },

        getState: function(){
            return this.state;
        },
        dispatch: function(action) {
            actionHandler.call(this, action);
        }

    });

    return store;
    
};

export default createStore;
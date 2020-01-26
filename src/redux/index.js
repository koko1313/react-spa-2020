import { combineReducers } from 'redux';

// action задължително има property - type
const counter = function(count = 1, action) {
    switch(action.type) {
        case "INCREMENT_COUNT": {
            return action.payload + 1;
        }
        default: return count;
    }
}

export default combineReducers({ counter });
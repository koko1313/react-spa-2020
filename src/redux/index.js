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

const movies = function(movies = [], action) {
    switch(action.type) {
        case "FETCHED_MOVIES": {
            return [...action.payload]; // създава нов масив от вече съществуващия масив
        }
        default: return movies;
    }
}

export default combineReducers({ counter, movies });
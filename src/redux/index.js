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

        // може да има вариант с повече case-ове
        // например когато fetch-ваме данни имаме FETCHING и FETCHED
        // FETCHING би връщало празен обект, а FETCHED - заредения обект

        // пример за delete_movies
        case "DELETE_MOVIES": {
            return movies.filter(m => m.id === action.idMovie);
        }

        default: return movies;
    }
}

const title = function(title = "Default title", action) {
    switch(action.type) {
        case "SET_TITLE": {
            return action.payload;
        }
        default: return title;
    }
}

export default combineReducers({ counter, movies, title });
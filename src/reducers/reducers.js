import { combineReducers } from 'redux';
import {SELECT_LANGUAGE, REQUEST_USERS, RECEIVE_USERS} from '../actions/actions';

function selectedLanguage(state="javascript", action){
    switch(action.type){
        case SELECT_LANGUAGE:
            return action.language
        default:
            return state
    }
}

function users(state={
    isFetching: false,
    items: []
}, action){
    switch(action.type){
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.logins
            })
        default: 
            return state
    }
}

function usersByLanguage(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
        case REQUEST_USERS:
            return Object.assign({}, state, {
                [action.language] : users(state[action.language], action)
            })
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    selectedLanguage, 
    usersByLanguage
});

export default rootReducer;
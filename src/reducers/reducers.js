import { combineReducers } from 'redux';
import {SELECT_LANGUAGE, REQUEST_USERS, RECEIVE_USERS} from '../actions/actions';

export function selectedLanguage(state="javascript", action){
    switch(action.type){
        case SELECT_LANGUAGE:
            return action.language
        default:
            return state
    }
}

export function users(state={
    isFetching: false,
    items: [],
    totalCount: 0
}, action){
    switch(action.type){
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.users,
                totalCount: action.totalCount
            })
        default: 
            return state
    }
}

export function usersByLanguage(state={}, action){
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
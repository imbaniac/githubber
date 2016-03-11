import fetch from 'isomorphic-fetch'

export const SELECT_LANGUAGE = 'SELECT_LANGUAGE'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function selectLanguage(language){
    return {
        type: SELECT_LANGUAGE,
        language
    }
}

export function requestUsers(language){
    return {
        type: REQUEST_USERS,
        language
    }
}

export function receiveUsers(language, json){
    return {
        type: RECEIVE_USERS,
        language,
        users: json.items,
        totalCount: json.total_count
    }
}

export function fetchUsers(language){
    return dispatch => {
        dispatch(requestUsers(language))
        return fetch(`https://api.github.com/search/users?&page=1&per_page=100&q=language:${language}&sort=followers&order=desc`)
            .then(response => response.json())
            .then(json=>dispatch(receiveUsers(language, json))
        )
    }
}

function shouldFetchUsers(state, language){
    const users = state.usersByLanguage[language]
    if(!users){
        return true
    } else if(users.isFetching){
        return false;
    }
}

export function fetchUsersIfNeeded(language){
    return (dispatch, getState) => {
        if(shouldFetchUsers(getState()), language){
            return dispatch(fetchUsers(language))
        } else{
            return Promise.resolve()
        }
    }
}
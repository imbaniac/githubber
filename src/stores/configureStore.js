import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from '../reducers/reducers'

const loggerMiddleware = createLogger()
export default function configureStore(initialState){
    return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
}


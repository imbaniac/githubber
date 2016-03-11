import expect from 'expect'
import * as actions from '../src/actions/actions'
import configureStore from '../src/stores/configureStore'

const store = configureStore();

describe("Action", ()=>{
    it('selectLanguage should select language', ()=>{
        expect(store.dispatch(actions.selectLanguage("javascript")))
        .toEqual({language: 'javascript', type: 'SELECT_LANGUAGE'})
    })
})
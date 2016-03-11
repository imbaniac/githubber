import expect from 'expect'
import {selectedLanguage, usersByLanguage} from '../src/reducers/reducers'
import * as actions from '../src/actions/actions'

describe('Reducer', ()=>{
    it('selectedLanguage should return initial state', ()=>{
        expect(selectedLanguage(undefined, {}), "javascript").toEqual("javascript");
    });
    it('usersByLanguage should make right request', ()=>{
        expect(
            usersByLanguage({}, {
                    language: "javascript",
                    type: "REQUEST_USERS"
                })
            ).toEqual(
                { javascript: { isFetching: true, items: [], totalCount: 0 } }
            )
    });
})
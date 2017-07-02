/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    fetching: false,
    sourceCode: {},
    quoteList: []
};

export default function QuotesForSourceCodeReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVE_QUOTES_FOR_SOURCE_CODE:
            return {
                ...state,
                fetching: true,
                sourceCode: action.sourceCode
            };

        case ActionTypes.QUOTES_FOR_SOURCE_CODE_RETRIEVED:
            return {
                ...state,
                quoteList: action.quoteList
            };

        default:
            return {
                ...state
            };
    }
}

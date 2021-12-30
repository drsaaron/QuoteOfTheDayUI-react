/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const emptyQuote = {
    text: '',
    usable: true,
    sourceCode: -1
};

const initialState = {
    quoteNumber: -1,
    quote: emptyQuote,
    sourceCodes: [],
    sourceCode: -1
};

export default function EditQuoteReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PREPARE_QUOTE_FOR_EDIT:
            return {
                ...state,
                quoteNumber: action.quoteNumber,
                quote: emptyQuote,
                sourceCodes: [],
                sourceCode: -1
            };

        case ActionTypes.PREPARE_QUOTE_FOR_ADD:
            return {
                ...state,
                quoteNumber: -1,
                quote: emptyQuote,
                sourceCodes: [],
                sourceCode: action.sourceCode
            };

        case ActionTypes.QUOTE_READY_FOR_EDIT:
            return {
                ...state,
                quote: action.quote,
                sourceCode: action.quote.sourceCode
            }

        case ActionTypes.QUOTE_EDIT_SOURCE_CODE_LIST_RETRIEVED:
            console.log("adding source codes");
            return {
                ...state,
                sourceCodes: action.sourceCodes
            }

        case ActionTypes.NEW_QUOTE_ADDED:
            return {
                ...state,
                quote: action.newQuote
            }

        default:
            return {
                ...state
            }
    }
}

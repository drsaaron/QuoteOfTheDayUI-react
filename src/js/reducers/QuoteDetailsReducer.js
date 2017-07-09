/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    quoteFetching: false,
    historyFetching: false,
    quote: {},
    history: {}
};

export default function QuoteDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVE_QUOTE_DETAILS:
            return {
                ...state,
                quoteFetching: true,
                historyFetching: true,
                quote: {},
                history: {}
            };

        case ActionTypes.QUOTE_DETAIL_QUOTE_RETRIEVED:
            return {
                ...state,
                quoteFetching: false,
                quote: action.quote
            };

        case ActionTypes.QUOTE_DETAIL_HISTORY_RETRIEVED:
            return {
                ...state,
                historyFetching: false,
                history: action.history
            };

        default:
            return {
                ...state
            };
    }
}



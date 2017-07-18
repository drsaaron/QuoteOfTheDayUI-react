/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    retrieving: true,
    qotd: {},
    quote: {}
};

export default function QuoteOfTheDayReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVE_QUOTE_OF_THE_DAY:
            return {
                ...state,
                retrieving: true,
                qotd: {},
                quote: {}
            }

        case ActionTypes.QUOTE_OF_THE_DAY_RETRIEVED:
            return {
                ...state,
                retrieving: false,
                qotd: action.qotd
            }

        case ActionTypes.QUOTE_OF_THE_DAY_QUOTE_RETRIEVED:
            return {
                ...state,
                quote: action.quote
            }

        default:
            return {
                ...state
            }
}
}

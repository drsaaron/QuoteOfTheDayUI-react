/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    quoteNumber: -1,
    quote: {}
};

export default function EditQuoteReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PREPARE_QUOTE_FOR_EDIT:
            return {
                ...state,
                quoteNumber: action.quoteNumber,
                quote: {}
            };

        case ActionTypes.QUOTE_READY_FOR_EDIT:
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
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';
import moment from 'moment';

const initialState = {
    initialized: false,
    runDate: moment(),
    qotd: {},
    quote: {},
    sourceCode: {}
};

export default function QuoteOfTheDayReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVE_QUOTE_OF_THE_DAY:
            return {
                ...state,
                initialized: true,
                runDate: moment(action.runDate),
                qotd: {},
                quote: {},
                sourceCode: {}
            }

        case ActionTypes.QUOTE_OF_THE_DAY_RETRIEVED:
            return {
                ...state,
                qotd: action.qotd
            }

        case ActionTypes.QUOTE_OF_THE_DAY_QUOTE_RETRIEVED:
            return {
                ...state,
                quote: action.quote
            }

        case ActionTypes.QUOTE_OF_THE_DAY_SOURCE_CODE_RETRIEVED:
            return {
                ...state,
                sourceCode: action.sourceCode
            }

        default:
            return {
                ...state
            }
    }
}

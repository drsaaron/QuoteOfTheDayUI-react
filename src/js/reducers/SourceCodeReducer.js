/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const newSourceCode = {
    number: null,
    text: ''
};

const initialState = {
    fetching: false,
    sourceCodes: [],
    sourceCode: newSourceCode,
    defaultSourceCode: newSourceCode
};

export default function SourceCodeReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.SOURCE_CODES_RETRIEVED:
        return {
            ...state,
            fetching: false,
            sourceCodes: action.sourceCodes
        };
	
    case ActionTypes.RETRIEVE_SOURCE_CODES:
        return {
            ...state,
            fetching: true,
            sourceCodes: []
        };
	
    case ActionTypes.PREPARE_ADD_SOURCE_CODE:
	return {
	    ...state,
	    sourceCode: newSourceCode
	};

    case ActionTypes.ADD_SOURCE_CODE:
	return {
	    ...state,
	    sourceCode: action.sourceCode
	};
	
    default:
        return {
            ...state
        };
    }
}


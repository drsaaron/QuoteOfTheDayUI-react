/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import sourceCodeAPI from '../api/SourceCodeAPI';
import { goHome } from './NavigationActions';

export function retrieveSourceCodes() {
    return {
        type: ActionTypes.RETRIEVE_SOURCE_CODES
    };
}

export function retrieveQuotesForSourceCode(sourceCode) {
    return {
        type: ActionTypes.RETRIEVE_QUOTES_FOR_SOURCE_CODE,
        sourceCode
    };
}

export function prepareAddSourceCode() {
    return {
	type: ActionTypes.PREPARE_ADD_SOURCE_CODE
    };
}

export function addSourceCode(sourceCode) {
    return (dispatch) => {
	sourceCodeAPI.addSourceCode(sourceCode)
	    .then((res) => JSON.parse(res.text))
	    .then((sc) => {
		dispatch({
		    type: ActionTypes.ADD_SOURCE_CODE,
		    sourceCode: sc
		})
		return sc;
	    })
	    .then(sc => {
		dispatch(retrieveSourceCodes);
		return sc;
	    })
	    .then(sc => {
		dispatch(goHome);
		return sc;
	    });
    }
}


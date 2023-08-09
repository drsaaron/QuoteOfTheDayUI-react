/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import sourceCodeAPI from '../api/SourceCodeAPI';
import { goHome } from './NavigationActions';

export function retrieveSourceCodes(token) {
    return {
        type: ActionTypes.RETRIEVE_SOURCE_CODES,
	token: token
    };
}

export function retrieveQuotesForSourceCode(sourceCode, token) {
    return {
        type: ActionTypes.RETRIEVE_QUOTES_FOR_SOURCE_CODE,
        sourceCode: sourceCode,
	token: token
    };
}

export function prepareAddSourceCode(token) {
    return {
	type: ActionTypes.PREPARE_ADD_SOURCE_CODE,
	token: token
    };
}

export function addSourceCode(sourceCode, navigate, token) {
    return (dispatch) => {
	sourceCodeAPI.addSourceCode(sourceCode, token)
	    .then((res) => JSON.parse(res.text))
	    .then((sc) => {
		dispatch({
		    type: ActionTypes.ADD_SOURCE_CODE,
		    sourceCode: sc
		})
		return sc;
	    })
	    .then(sc => {
		dispatch(retrieveSourceCodes(token));
		return sc;
	    })
	    .then(sc => {
		goHome(navigate);
		return sc;
	    });
    }
}


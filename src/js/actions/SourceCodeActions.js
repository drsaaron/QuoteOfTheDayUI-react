/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';

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

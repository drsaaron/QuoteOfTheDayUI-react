/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {authenticatedGet, authenticatedPut, authenticatedPost} from '../actions/AuthenticatedRequest';
import { DATA_URL_ROOT } from '../constants/Constants';

export default class SourceCodeAPI {
    static getSourceCode(sourceCodeNumber, token) {
        return authenticatedGet(DATA_URL_ROOT + "/sourceCode/" + sourceCodeNumber, token);
    }
    
    static getSourceCodeList(token) {
        return authenticatedGet(DATA_URL_ROOT + "/sourceCode", token);
    }

    static addSourceCode(sourceCode, token) {
	return authenticatedPost(DATA_URL_ROOT + "/sourceCode", token)
	    .send(sourceCode)
	    .set('Accept', 'application/json');
    }
}

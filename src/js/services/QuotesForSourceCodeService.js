/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { authenticatedGet } from '../actions/AuthenticatedRequest';
import ActionTypes from '../actions/ActionTypes';
import { DATA_URL_ROOT } from '../constants/Constants';

const QuotesForSourceCodeService = store => next => action => {
    next(action);
    switch (action.type) {
    case ActionTypes.RETRIEVE_QUOTES_FOR_SOURCE_CODE:
        authenticatedGet(DATA_URL_ROOT + "/quote", action.token)
            .query({ sourceCode: action.sourceCode.number })
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
		
                var quoteList = JSON.parse(res.text);
                next({
                    type: ActionTypes.QUOTES_FOR_SOURCE_CODE_RETRIEVED,
                    quoteList
                });
            });

	break;

    default:
	
    };
};

export default QuotesForSourceCodeService;


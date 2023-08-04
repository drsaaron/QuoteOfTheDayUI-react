/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';
import sourceCodeAPI from '../api/SourceCodeAPI';

const SourceCodeService = store => next => action => {
            next(action);
            switch (action.type) {
            case ActionTypes.RETRIEVE_SOURCE_CODES:
                sourceCodeAPI.getSourceCodeList(action.token)
                    .end((err, res) => {
                        if (err) {
                            console.log(err);
                        }
			
                        var sourceCodes = JSON.parse(res.text);
                        next({
                            type: ActionTypes.SOURCE_CODES_RETRIEVED,
                            sourceCodes
                        });
                    });
		break;
		
	    default:
		
            }
        };

export default SourceCodeService;

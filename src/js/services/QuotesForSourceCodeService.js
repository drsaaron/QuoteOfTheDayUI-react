/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';
import ActionTypes from '../actions/ActionTypes';
import { DATA_URL_ROOT } from '../constants/Constants';

const QuotesForSourceCodeService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_QUOTES_FOR_SOURCE_CODE:
                    request
                            .get(DATA_URL_ROOT + "/quote")
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
            };
        };

export default QuotesForSourceCodeService;


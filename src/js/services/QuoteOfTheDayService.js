/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';
import ActionTypes from '../actions/ActionTypes';
import { DATA_URL_ROOT } from '../constants/Constants';

const QuoteOfTheDayService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                    request
                            .get(DATA_URL_ROOT + "/qotdHistory/" + action.quoteNumber)
                            .end((err, res) => {
                                if (err) {
                                    console.log(err);
                                }

                                var history = JSON.parse(res.text).historyByYear;
                                next({
                                    type: ActionTypes.QUOTE_DETAIL_HISTORY_RETRIEVED,
                                    history
                                });
                            });
            };
        };

export default QuoteOfTheDayService;




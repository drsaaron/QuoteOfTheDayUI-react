/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* This service will support activities for a specfic quote. */

import request from 'superagent';
import ActionTypes from '../actions/ActionTypes';
import { DATA_URL_ROOT } from '../constants/Constants';

const QuoteService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                case ActionTypes.QUOTE_OF_THE_DAY_RETRIEVED:
                    var quoteNumber, nextAction;
                    switch (action.type) {
                        case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                            quoteNumber = action.quoteNumber;
                            nextAction = ActionTypes.QUOTE_DETAIL_QUOTE_RETRIEVED;
                            break;
                        case ActionTypes.QUOTE_OF_THE_DAY_RETRIEVED:
                            console.log("fetching quote for QOTD");
                            quoteNumber = action.qotd.quoteNumber;
                            nextAction = ActionTypes.QUOTE_OF_THE_DAY_QUOTE_RETRIEVED;
                            break;
                    }
                    request
                            .get(DATA_URL_ROOT + "/quote/" + quoteNumber)
                            .end((err, res) => {
                                if (err) {
                                    console.log(err);
                                }

                                var quote = JSON.parse(res.text);
                                next({
                                    type: nextAction,
                                    quote
                                });
                            });
            };
        };

export default QuoteService;



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* This service will support activities for a specfic quote. */

import ActionTypes from '../actions/ActionTypes';
import quoteAPI from '../api/QuoteAPI';

const QuoteService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                    quoteAPI.getQuote(action.quoteNumber)
                            .end((err, res) => {
                                if (err) {
                                    console.log(err);
                                }

                                var quote = JSON.parse(res.text);
                                next({
                                    type: ActionTypes.QUOTE_DETAIL_QUOTE_RETRIEVED,
                                    quote
                                });
                            });
            };
        };

export default QuoteService;



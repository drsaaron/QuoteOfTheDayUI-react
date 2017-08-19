/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* This service will support activities for a specfic quote. */

import ActionTypes from '../actions/ActionTypes';
import quoteAPI from '../api/QuoteAPI';
import sourceCodeAPI from '../api/SourceCodeAPI';

const QuoteService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                    quoteAPI.getQuote(action.quoteNumber)
                            .then((res) => {
                                return JSON.parse(res.text);
                            })
                            .then((quote) => {
                                store.dispatch({
                                    type: ActionTypes.QUOTE_DETAIL_QUOTE_RETRIEVED,
                                    quote
                                });
                                return quote;
                            })
                            .then(quote => {
                                return sourceCodeAPI.getSourceCode(quote.sourceCode);
                            })
                            .then(res => {
                                return JSON.parse(res.text);
                            })
                            .then(sourceCode => {
                                store.dispatch({type: ActionTypes.QUOTE_DETAIL_SOURCE_CODE_RETRIEVED, sourceCode});
                            });
            }
        };

export default QuoteService;



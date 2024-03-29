/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';
import quoteAPI from '../api/QuoteAPI';
import quoteOfTheDayAPI from '../api/QuoteOfTheDayAPI';
import sourceCodeAPI from '../api/SourceCodeAPI';

function dateAsString(d) {
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return year + "-" + month + "-" + day;
}

const QuoteOfTheDayService = store => next => action => {
            next(action);
            switch (action.type) {
            case ActionTypes.RETRIEVE_QUOTE_DETAILS:
                quoteOfTheDayAPI.getQuoteOfTheDayHistory(action.quoteNumber, action.token)
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
                break;
		
            case ActionTypes.RETRIEVE_QUOTE_OF_THE_DAY:
                var runDate = action.runDate;
		var token = action.token;
		console.log("token = " + token);
                var formatDate = dateAsString(runDate);
                quoteOfTheDayAPI.getQuoteOfTheDay(formatDate, token)
                    .then(res => {
                        return JSON.parse(res.text);
                    })
                    .then(qotd => {
                        store.dispatch({type: ActionTypes.QUOTE_OF_THE_DAY_RETRIEVED, qotd});
                        return qotd;
                    })
                    .then(qotd => {
                        return quoteAPI.getQuote(qotd.quoteNumber, token);
                    })
                    .then(res => {
                        return JSON.parse(res.text);
                    })
                    .then(quote => {
                        store.dispatch({type: ActionTypes.QUOTE_OF_THE_DAY_QUOTE_RETRIEVED, quote});
                        return quote;
                    })
                    .then(quote => {
                        return sourceCodeAPI.getSourceCode(quote.sourceCode, token);
                    })
                    .then(res => {
                        return JSON.parse(res.text);
                    })
                    .then(sourceCode => {
                        store.dispatch({type: ActionTypes.QUOTE_OF_THE_DAY_SOURCE_CODE_RETRIEVED, sourceCode});
                    });
                break;
	    default:
		
            }
        };

export default QuoteOfTheDayService;




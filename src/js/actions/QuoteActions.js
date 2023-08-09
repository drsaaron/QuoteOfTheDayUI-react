/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import quoteAPI from '../api/QuoteAPI';
import sourceCodeAPI from '../api/SourceCodeAPI';
import { retrieveQuotesForSourceCode } from './SourceCodeActions';
import { goHome, showQuoteDetails } from './NavigationActions';

export function retrieveQuoteDetails(quoteNumber, token) {
    return {
        type: ActionTypes.RETRIEVE_QUOTE_DETAILS,
        quoteNumber: quoteNumber,
	token: token
    };
}

function getSourceCodesForEdit(dispatch, token) {
    sourceCodeAPI.getSourceCodeList(token)
            .then((res) => {
                return JSON.parse(res.text);
            })
            .then((sourceCodes) => {
                dispatch({
                    type: ActionTypes.QUOTE_EDIT_SOURCE_CODE_LIST_RETRIEVED,
                    sourceCodes
                });
            });
}

export function quoteDataUpdate(updatedQuote) {
    return (dispatch) => {
	console.log("dispatchnig " + updatedQuote);
	dispatch({
	    type: ActionTypes.QUOTE_DATA_UPDATED,
	    updatedQuote
	});
    }
}

export function retrieveQuoteForEdit(quoteNumber) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PREPARE_QUOTE_FOR_EDIT,
            quoteNumber
        });

        quoteAPI.getQuote(quoteNumber)
                .then((res) => {
                    return JSON.parse(res.text);
                })
                .then((quote) => {
                    dispatch({
                        type: ActionTypes.QUOTE_READY_FOR_EDIT,
                        quote
                    });
                });

        getSourceCodesForEdit(dispatch);
    };
}

export function updateQuote(quote, navigate) {
    return (dispatch) => {
        quoteAPI.updateQuote(quote)
                .then((res) => {
                    return JSON.parse(res.text);
                })
                .then(q => {
                    dispatch(showQuoteDetails(q.number, navigate));
                });
    };
}

export function prepareAddQuote(sourceCode, token) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PREPARE_QUOTE_FOR_ADD,
            sourceCode
        });

        getSourceCodesForEdit(dispatch, token);
    };
}

export function saveQuote(newQuote, navigate, token) {
    return (dispatch) => {
        // add the quote, get the updated quotes for the source code, and return to home page
        quoteAPI.addQuote(newQuote, token)
                .then((res) => {
                    return JSON.parse(res.text);
                })
                .then((newQuote) => {
                    dispatch({
                        type: ActionTypes.NEW_QUOTE_ADDED,
                        newQuote
                    });
                    return newQuote;
                })
                .then((newQuote) => {
                    return sourceCodeAPI.getSourceCode(newQuote.sourceCode);
                })
                .then((res) => {
                    return JSON.parse(res.text);
                })
                .then((sourceCode) => {
                    dispatch(retrieveQuotesForSourceCode(sourceCode));
                })
	    .then(() => {
		goHome(navigate);
	    });

    };
}

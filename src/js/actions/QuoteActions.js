/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import { push } from 'react-router-redux';
import quoteAPI from '../api/QuoteAPI';
import sourceCodeAPI from '../api/SourceCodeAPI';

export function retrieveQuoteDetails(quoteNumber) {
    return {
        type: ActionTypes.RETRIEVE_QUOTE_DETAILS,
        quoteNumber
    };
}

export function showQuoteDetails(quoteNumber) {
    return push("/quoteDetails/" + quoteNumber);
}

export function editQuote(quoteNumber) {
    return push("/editQuote/" + quoteNumber);
}

function getSourceCodesForEdit(dispatch) {
    sourceCodeAPI.getSourceCodeList()
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

export function updateQuote(quote) {
    return (dispatch) => {
        quoteAPI.updateQuote(quote)
                .then((res) => {
                    return JSON.parse(res.text);
                })
                .then(q => {
                    dispatch(showQuoteDetails(q.number));
                });
    };
}

export function addQuote(sourceCode) {
    return push("/addQuote/" + sourceCode);
}

export function prepareAddQuote(sourceCode) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.PREPARE_QUOTE_FOR_ADD,
            sourceCode
        });
    };
}
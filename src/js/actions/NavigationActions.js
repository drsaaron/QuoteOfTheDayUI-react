/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { retrieveQuoteDetails, retrieveQuoteForEdit,  prepareAddQuote } from '../actions/QuoteActions';

export function goHome(navigate) {
    navigate("/");
}

export function showQuoteDetails(quoteNumber, navigate, token) {
    navigate("/quoteDetails/" + quoteNumber);
    console.log("token = " + token);
    return retrieveQuoteDetails(quoteNumber, token);
}

export function editQuote(quoteNumber, navigate, token) {
    navigate("/editQuote/" + quoteNumber);
    return retrieveQuoteForEdit(quoteNumber, token);
}

export function addQuote(sourceCode, navigate, token) {
    navigate("/addQuote/" + sourceCode);
    return prepareAddQuote(sourceCode, token);
}

export function addSourceCode(navigate) {
    navigate("/addSourceCode");
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { retrieveQuoteDetails, retrieveQuoteForEdit, updateQuote,  prepareAddQuote, saveQuote } from '../actions/QuoteActions';

export function goHome(navigate) {
    navigate("/");
}

export function showQuoteDetails(quoteNumber, navigate) {
    navigate("/quoteDetails/" + quoteNumber);
    return retrieveQuoteDetails(quoteNumber);
}

export function editQuote(quoteNumber, navigate) {
    navigate("/editQuote/" + quoteNumber);
    return retrieveQuoteForEdit(quoteNumber);
}

export function addQuote(sourceCode, navigate) {
    navigate("/addQuote/" + sourceCode);
    return prepareAddQuote(sourceCode);
}

export function addSourceCode(navigate) {
    navigate("/addSourceCode");
}

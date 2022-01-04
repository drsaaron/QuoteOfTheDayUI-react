/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { push } from 'connected-react-router';
import { retrieveQuoteDetails, retrieveQuoteForEdit, updateQuote } from '../actions/QuoteActions';

export function goHome() {
    return push("/");
}

export function showQuoteDetails(quoteNumber, navigate) {
    navigate("/quoteDetails/" + quoteNumber);
    return retrieveQuoteDetails(quoteNumber);
}

export function editQuote(quoteNumber, navigate) {
    navigate("/editQuote/" + quoteNumber);
    return retrieveQuoteForEdit(quoteNumber);
}

export function addQuote(sourceCode) {
    return push("/addQuote/" + sourceCode);
}

export function addSourceCode() {
    return push("/addSourceCode");
}

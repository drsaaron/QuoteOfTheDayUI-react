/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import { push } from 'react-router-redux';

export function goHome() {
    return push("/");
}

export function showQuoteDetails(quoteNumber) {
    return push("/quoteDetails/" + quoteNumber);
}

export function editQuote(quoteNumber) {
    return push("/editQuote/" + quoteNumber);
}

export function addQuote(sourceCode) {
    return push("/addQuote/" + sourceCode);
}


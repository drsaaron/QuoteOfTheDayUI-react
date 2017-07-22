/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import { push } from 'react-router-redux';

export function retrieveQuoteDetails(quoteNumber) {
    return {
        type: ActionTypes.RETRIEVE_QUOTE_DETAILS,
        quoteNumber
    };
}

export function showQuoteDetails(quoteNumber) {
    return push("/quoteDetails/" + quoteNumber);
}


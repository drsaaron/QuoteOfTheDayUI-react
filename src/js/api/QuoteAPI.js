/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {authenticatedGet, authenticatedPut, authenticatedPost} from '../actions/AuthenticatedRequest';
import { DATA_URL_ROOT } from '../constants/Constants';

export default class QuoteAPI {
    static getQuote(quoteNumber, token) {
        return authenticatedGet(DATA_URL_ROOT + "/quote/" + quoteNumber, token);
    }
    
    static updateQuote(quote, token) {
        return authenticatedPut(DATA_URL_ROOT + "/quote/" + quote.number, token) 
                .send(quote)
                .set('Accept', 'application/json');
    }
    
    static addQuote(quote, token) {
        return authenticatedPost(DATA_URL_ROOT + "/quote", token)
                .send(quote)
                .set('Accept', 'application/json');
    }
}

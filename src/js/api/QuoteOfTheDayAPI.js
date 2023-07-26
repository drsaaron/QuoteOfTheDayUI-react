/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {authenticatedGet} from '../actions/AuthenticatedRequest';
import { DATA_URL_ROOT } from '../constants/Constants';

export default class QuoteOfTheDayAPI {
    static getQuoteOfTheDayHistory(quoteNumber, token) {
        return authenticatedGet(DATA_URL_ROOT + "/qotdHistory/" + quoteNumber, token);
    }

    static getQuoteOfTheDay(runDate, token) {
        return authenticatedGet(DATA_URL_ROOT + "/qotd/" + runDate, token);
    }
}


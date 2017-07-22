/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';
import { DATA_URL_ROOT } from '../constants/Constants';

export default class QuoteOfTheDayAPI {
    static getQuoteOfTheDayHistory(quoteNumber) {
        return request.get(DATA_URL_ROOT + "/qotdHistory/" + quoteNumber);
    }

    static getQuoteOfTheDay(runDate) {
        return request.get(DATA_URL_ROOT + "/qotd/" + runDate);
    }
}


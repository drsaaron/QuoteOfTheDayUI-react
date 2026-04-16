/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {authenticatedGet} from '../actions/AuthenticatedRequest';
import { DATA_URL_ROOT } from '../constants/Constants';

function formatDateWithPadding(dateStr) {
  const [year, month, day] = dateStr.split('-');
  
  // padStart(2, '0') ensures the string is at least 2 characters long
  const paddedMonth = month.padStart(2, '0');
  const paddedDay = day.padStart(2, '0');
  
  return `${year}-${paddedMonth}-${paddedDay}`;
}

export default class QuoteOfTheDayAPI {
    static getQuoteOfTheDayHistory(quoteNumber, token) {
        return authenticatedGet(DATA_URL_ROOT + "/qotdHistory/" + quoteNumber, token);
    }

    static getQuoteOfTheDay(runDate, token) {
        return authenticatedGet(DATA_URL_ROOT + "/qotd/" + formatDateWithPadding(runDate), token);
    }
}


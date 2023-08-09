/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';

export function retrieveQuoteOfTheDay(runDate, token) {
    return {
        type: ActionTypes.RETRIEVE_QUOTE_OF_THE_DAY,
	token: token,
        runDate: runDate
    };
}

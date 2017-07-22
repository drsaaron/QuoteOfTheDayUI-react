/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';
import { DATA_URL_ROOT } from '../constants/Constants';

export default class SourceCodeAPI {
        static getSourceCode(sourceCodeNumber) {
            return request.get(DATA_URL_ROOT + "/sourceCode/" + sourceCodeNumber);
        }
        
        static getSourceCodeList() {
            return request.get(DATA_URL_ROOT + "/sourceCode");
        }
}

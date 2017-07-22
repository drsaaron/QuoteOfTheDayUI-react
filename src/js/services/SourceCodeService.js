/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';
import ActionTypes from '../actions/ActionTypes';
import { DATA_URL_ROOT } from '../constants/Constants';
import sourceCodeAPI from '../api/SourceCodeAPI';

const SourceCodeService = store => next => action => {
            next(action);
            switch (action.type) {
                case ActionTypes.RETRIEVE_SOURCE_CODES:
                    sourceCodeAPI.getSourceCodeList()
                            .end((err, res) => {
                                if (err) {
                                    console.log(err);
                                }

                                var sourceCodes = JSON.parse(res.text);
                                next({
                                    type: ActionTypes.SOURCE_CODES_RETRIEVED,
                                    sourceCodes
                                });
                            })
            }
        };

export default SourceCodeService;

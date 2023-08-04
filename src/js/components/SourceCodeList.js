/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {useEffect} from 'react';
import SourceCodeListItem from './SourceCodeListItem';

const SourceCodeList = (props) => {
    var navigate = props.navigate;

    useEffect(() => {
	if (props.login.token !== null && props.sourceCodes.sourceCodes.length === 0) {
	    props.retrieveSourceCodes(props.login.token);
	}
    }, [props.login.token]);
    
    return (
        <div id="quoteSourceCodeListContainer">
            <h2>Sources <button onClick={() => props.addSourceCode(navigate)}>+</button></h2>
            <div id="quoteSourceCodeList">
                <ul>
            { props.sourceCodes.sourceCodes.map((sourceCode) => <SourceCodeListItem key={sourceCode.number} sourceCode={sourceCode} addQuote={props.addQuote} navigate={props.navigate} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} login={props.login} />) }
                </ul>
            </div>
        </div>
    );
}

export default SourceCodeList;

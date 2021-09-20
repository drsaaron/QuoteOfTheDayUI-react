/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import SourceCodeListItem from './SourceCodeListItem';

const SourceCodeList = (props) => {
    return (
        <div id="quoteSourceCodeListContainer">
            <h2>Sources <button onClick={props.addSourceCode}>+</button></h2>
            <div id="quoteSourceCodeList">
                <ul>
                    { props.sourceCodes.sourceCodes.map((sourceCode) => <SourceCodeListItem key={sourceCode.number} sourceCode={sourceCode} addQuote={props.addQuote} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} />) }
                </ul>
            </div>
        </div>
    );
}

export default SourceCodeList;

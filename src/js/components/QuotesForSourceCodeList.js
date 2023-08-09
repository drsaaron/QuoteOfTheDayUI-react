/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import QuoteForSourceCode from './QuoteForSourceCode';
import classNames from 'classnames';

const QuotesForSourceCodeList = (props) => {

    const getClassNames = () => {
        var sourceCodeNumber = props.quotesForSourceCode.sourceCode.number || -1;
        return classNames({
            hidden: sourceCodeNumber < 0
        });
    };
    
    var sourceCodeText = "";
    if (props.quotesForSourceCode.sourceCode.text) {
        sourceCodeText = props.quotesForSourceCode.sourceCode.text;
    }
    
    return (
        <div id="quotesForSourceCodeContainer" className={getClassNames()}>
            <div id="quotesForSourceCodeName">
                Quotes for <span className="quoteSourceCodeText">{sourceCodeText}</span>
            </div>
            
            <div id="quotesForSourceCodeQuotes"> 
                { props.quotesForSourceCode.quoteList.map((quote) => <QuoteForSourceCode key={quote.number} quote={quote} navigate={props.navigate} login={props.login} showQuoteDetails={props.showQuoteDetails} />) }
            </div>
        </div>
    );
};

export default QuotesForSourceCodeList;


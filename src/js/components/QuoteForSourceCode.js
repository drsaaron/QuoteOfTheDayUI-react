/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import QuoteText from './QuoteText';

const QuoteForSourceCode = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        props.showQuoteDetails(props.quote.number, props.navigate, props.login.token);
    }

    var quote = props.quote;

    return (
        <article className="quote">
            <a href="/" onClick={clickHandler}>{quote.number}</a>
            <br />
            <QuoteText quote={quote} />
        </article>
    );
};

export default QuoteForSourceCode;


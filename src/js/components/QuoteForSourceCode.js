/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import QuoteText from './QuoteText';

export default class QuoteForSourceCode extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        event.preventDefault();
        this.props.showQuoteDetails(this.props.quote.number);
    }

    render() {
        var quote = this.props.quote;

        return (
                <article className="quote">
                    <a href="/" onClick={this.clickHandler}>{quote.number}</a>
                    <br />
                    <QuoteText quote={quote} />
                </article>
                );
    }
}

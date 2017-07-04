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
    }

    render() {
        var quote = this.props.quote;

        return (
                <article className="quote">
                    {quote.number}
                    <br />
                    <QuoteText quote={quote} />
                </article>
                )
    }
}

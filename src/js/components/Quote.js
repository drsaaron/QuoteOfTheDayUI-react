/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import sanitizeHtml from 'sanitize-html-react';

export default class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var quote = this.props.quote;
        var quoteText = sanitizeHtml(quote.text.replace(new RegExp('\r?\n', 'g'), '<br />'));

        return (
                <article className="quote">
                    {quote.number}
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: quoteText}}></div>
                </article>
                );
    }
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import sanitizeHtml from 'sanitize-html-react';

export default class QuoteText extends Component {

    render() {
        var quote = this.props.quote;
        var quoteText = (quote.text) ? sanitizeHtml(quote.text.replace(new RegExp('\r?\n', 'g'), '<br />')) : "<span></span>";

        return (
                <div dangerouslySetInnerHTML={{__html: quoteText}} className="QuoteText"></div>
                );
    }
}

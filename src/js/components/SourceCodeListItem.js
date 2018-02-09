/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';

export default class SourceCodeListItem extends Component {
    constructor(props) {
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);
        this.addQuote = this.addQuote.bind(this);
    }
    
    clickHandler(event) {
        event.preventDefault();
        this.props.retrieveQuotesForSourceCode(this.props.sourceCode);
    }
    
    addQuote(event) {
        event.preventDefault();
        this.props.addQuote(this.props.sourceCode);
    }

    render() {
        return (
                <li><a href="#" onClick={this.clickHandler}>{this.props.sourceCode.text}</a> <button onClick={this.addQuote}>+</button></li>
                );
    }
}

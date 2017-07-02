/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';
import classNames from 'classnames';

class QuotesForSourceCodeList extends Component {

    constructor(props) {
        super(props);
    }

    getClassNames() {
        var sourceCodeNumber = this.props.quotesForSourceCode.sourceCode.number || -1;
        return classNames({
            hidden: sourceCodeNumber < 0
        });
    }
    
    render() {
        var sourceCodeText = "";
        if (this.props.quotesForSourceCode.sourceCode.text) {
            sourceCodeText = this.props.quotesForSourceCode.sourceCode.text;
        }

        return (
                <div id="quotesForSourceCode" className={this.getClassNames()}>
                    <div id="quotesForSourceCodeName">
                        Quotes for <span className="quoteSourceCodeText">{sourceCodeText}</span>
                    </div>
                
                    <div id="quotesForSourceCodeQuotes"> 
                        { this.props.quotesForSourceCode.quoteList.map((quote) => <Quote key={quote.number} quote={quote} />) }
                    </div>
                </div>
                );
    }
};

const mapStateToProps = (state) => {
    return {
        quotesForSourceCode: state.quotesForSourceCode
    }
}

export default connect(mapStateToProps)(QuotesForSourceCodeList);

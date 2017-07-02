/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuotesForSourceCode } from '../actions/SourceCodeActions';

class SourceCodeListItem extends Component {
    constructor(props) {
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(event) {
        event.preventDefault();
        this.props.retrieveQuotesForSourceCode(this.props.sourceCode);
    }

    render() {
        return (
                <li><a href="#" onClick={this.clickHandler}>{this.props.sourceCode.text}</a></li>
                );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuotesForSourceCode: (sourceCode) => dispatch(retrieveQuotesForSourceCode(sourceCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodeListItem);
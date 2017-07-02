/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveSourceCodes } from '../actions/SourceCodeActions';
import SourceCodeListItem from './SourceCodeListItem';

class SourceCodeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div id="quoteSourceCodeList">
                    <ul>
                        { this.props.sourceCodes.sourceCodes.map((sourceCode) => <SourceCodeListItem key={sourceCode.number} sourceCode={sourceCode} />) }
                    </ul>
                </div>
                );
    }
    
    componentDidMount() {
        this.props.retrieveSourceCodes();
    }
}

const mapStateToProps = (state) => {
    return {
        sourceCodes: state.sourceCodes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveSourceCodes: () => dispatch(retrieveSourceCodes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodeList);
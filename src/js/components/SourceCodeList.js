/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SourceCodeListItem from './SourceCodeListItem';

class SourceCodeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div id="quoteSourceCodeListContainer">
                <h2>Sources</h2>
		<div id="quoteSourceCodeList">
                    <ul>
                        { this.props.sourceCodes.sourceCodes.map((sourceCode) => <SourceCodeListItem key={sourceCode.number} sourceCode={sourceCode} />) }
            </ul>
		</div>
                </div>
                );
    }
}

const mapStateToProps = (state) => {
    return {
        sourceCodes: state.sourceCodes
    };
};

export default connect(mapStateToProps)(SourceCodeList);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';

export default class SourceCodeListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <li>{this.props.sourceCode.text}</li>
                );
    }
}

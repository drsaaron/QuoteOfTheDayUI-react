/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import Header from './Header';
import SourceCodeList from './SourceCodeList';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Header />
                    <SourceCodeList />
                </div>
                );
    }
}

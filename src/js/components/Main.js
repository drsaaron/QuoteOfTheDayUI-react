/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import Header from './Header';
import SourceCodeList from './SourceCodeList';
import QuotesForSourceCodeList from './QuotesForSourceCodeList';
import QuoteOfTheDay from './QuoteOfTheDay';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <Header />
                    <QuoteOfTheDay />
		    <div id="appDataContainer">
                        <SourceCodeList />
                        <QuotesForSourceCodeList />
		    </div>
                </div>
                );
    }
}

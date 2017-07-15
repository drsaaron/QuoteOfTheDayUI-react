/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import QuoteOfTheDayHistoryForYear from './QuoteOfTheDayHistoryForYear';

export default class QuoteOfTheDayHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var years = Object.keys(this.props.history);
        var noHistory = years.length === 0 ? <em>No history</em> : "";
        return (
                <div id="quoteOfTheDayHistory">
                    <h2>Quote of the day history</h2>
                    {noHistory}
                    { years.map(year => <QuoteOfTheDayHistoryForYear key={year} year={year} history={this.props.history[year]} />)}
                </div>
                );
    }
}


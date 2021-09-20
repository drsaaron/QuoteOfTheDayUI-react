/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';

export default class QuoteOfTheDayHistoryForYear extends Component {

    render() {
        var year = this.props.year;
        var history = this.props.history;

        return (
                <article>
                    {year}
                    <ul>
                        { history.map(datum => <li key={datum.runDate}>{datum.runDate}</li>) }
                    </ul>
                </article>
                );
    }
}

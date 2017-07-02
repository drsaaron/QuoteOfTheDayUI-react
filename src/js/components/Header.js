/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div id="pageHeader" align="top">
                    <table border='0'>
                        <tr><td align="left">Scott's Quote of the Day</td></tr>
                    </table>
                    <p />
                </div>
                );
    }
}

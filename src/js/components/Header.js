/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { goHome } from '../actions/NavigationActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goHome: () => dispatch(goHome())
    };
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleHomeLink = this.handleHomeLink.bind(this);
    }

    handleHomeLink(event) {
        event.preventDefault();
        this.props.goHome();
    }

    render() {
        return (
                <div id="pageHeader">
                    <div id="pageHeaderApp">
                        <a href="/" onClick={this.handleHomeLink}>Scott's Quote of the Day</a>
                    </div>
                </div>
                );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

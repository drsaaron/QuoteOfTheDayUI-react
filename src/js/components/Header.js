/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { goHome } from '../actions/NavigationActions';
import { connect } from 'react-redux';

const {version} = require("../../../package.json");

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goHome: (navigate) => dispatch(goHome(navigate))
    };
};

const Header = (props) => {

    const handleHomeLink = (event) => {
        event.preventDefault();
        props.goHome(props.navigate);
    }

    return (
        <div id="pageHeader">
            <div id="pageHeaderApp">
                <a href="/" onClick={handleHomeLink}>Scott's Quote of the Day, version {version}</a>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

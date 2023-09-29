/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
	applicationData: state.applicationData
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
                <a href="/" onClick={handleHomeLink}>Scott's Quote of the Day, version {props.applicationData.appVersion}</a>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(Header);


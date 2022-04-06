/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const {version} = require("../../../package.json");

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

export default Header;

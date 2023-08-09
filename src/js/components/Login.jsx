import {useState} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/LoginActions';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import { goHome } from '../actions/NavigationActions';

const {version} = require("../../../package.json");

const mapStateToProps = (state) => {
    return {
	login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	userLoginFetch: (userInfo, history) => dispatch(userLoginFetch(userInfo, history)),
	goHome: (navigate) => dispatch(goHome(navigate))
    };
};

const Login = (props) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
	event.preventDefault();
	props.userLoginFetch({username: username, password: password}, navigate);
    }

    return (
	<div id="loginForm">
	    <Header navigate={navigate} goHome={goHome} version={version} />
	    <form onSubmit={(event) => handleSubmit(event)}>
		<h1>Login</h1>
		<table>
		    <tbody>
			<tr>
			    <td>
				<label>Username</label>
			    </td>
			    <td>
				<input
				name='username'
				placeholder='Username'
				value={username}
				onChange={(event) => setUsername(event.target.value)}
				/>
			    </td>
			</tr>

			<tr>
			    <td>
				<label>Password</label>
			    </td>
			    <td>
				<input
				type="password"
				name="password"
				placeholder='Password'
				value={password}
				onChange={(event) => setPassword(event.target.value)}
				/>
			    </td>
			</tr>

			<tr>
			    <td colSpan="2">
				<input type='submit' value='Login' />
			    </td>
			</tr>

			<tr>
			    <td colSpan="2">
				<span className="errorMessage">{props.login.errorMessage}</span>
			    </td>
			</tr>
		    </tbody>
		</table>
	    </form>
	</div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


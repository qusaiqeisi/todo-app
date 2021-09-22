import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';

const SignUp = () => {
	const contextType = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function changeUsername(e) {
		setUsername(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	// function handleChangeEmail(e) {
	// 	setEmail(e.target.value);
	// }

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		contextType.signup(email, username, password, role);
	}

	return (
		<If condition={contextType.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				
				<form onSubmit={handleSubmitSignup} style={{marginLeft: '50px'}}>
					<input type="text" name="username" placeholder="Enter Username" onChange={changeUsername}
					 style={{ borderRadius: '5px', width: '120px', margin: '13px'}}/>
					<input type="password"	name="password" placeholder="Enter password" onChange={changePassword}  style={{ borderRadius: '5px', width: '120px', margin: '13px' }}/>

					<select name="roles" id="roles" onChange={handleChangeRole}  style={{borderRadius:'5px' , height:'25px', marginRight: '20px'}}>
						<option value="user">user</option>
						<option value="editor" >editor</option> <option value="admin">admin</option>
					</select>

					<button style={{ borderRadius: '5px', width: '70px', height: '30px',  }}>SignUp</button>
				</form>
			</Else>
		</If>
	);
};

export default SignUp;
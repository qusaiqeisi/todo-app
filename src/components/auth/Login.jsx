import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';

const Login = () => {
  const contextType = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    contextType.login(username, password);
  }


  return (
    <If condition={contextType.loggedIn}>
      <Then>
        <button onClick={contextType.logout} style={{ borderRadius: '5px', width: '70px', height: '30px' }}>Logout</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit} style={{marginLeft: '50px'}}>
          <input type="text" name="username" placeholder="Enter Username" onChange={changeUsername} style={{ borderRadius: '5px', width: '120px', margin: '13px' }} />
          <input type="text" name="password" placeholder="Enter Password" onChange={changePassword} style={{ borderRadius: '5px', width: '120px', margin: '13px' }} />
          <button style={{ borderRadius: '5px', width: '70px', height: '30px',  }}>Login</button>
        </form>
      </Else>
    </If>
  )
}

export default Login
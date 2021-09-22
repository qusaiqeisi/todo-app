import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { If } from 'react-if';

const Auth=(props)=> {

  const contextType = useContext(AuthContext);

    let render = false;

   try {
     render = contextType.loggedIn && props.capability
     ? contextType.user.capabilities.includes(props.capability)
     : false;
   } catch (error) {
    console.log('NOT AUTHORIZED', error.message);

   }
   
   
    return (
      <If condition={render}>
        <div>{props.children}</div>
      </If>
    )



}

export default Auth
import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import Login from '../auth/Login'
import SignUp from '../auth/Signup'

function Header() {
  return (
    <Navbar>
      <Navbar.Group >
        <Navbar.Heading>To-Do List</Navbar.Heading>
        <Navbar.Divider />
        <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
        <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>
      <Login />
      <SignUp style={{width : '200px'}}/>
      </Navbar.Group>
    </Navbar>

  )
}

export default Header
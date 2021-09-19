import React from "react";
import { Navbar,Button } from '@blueprintjs/core';

export default function Headers(props){
    return(
        <Navbar class="bp3-navbar bp3-dark">
        <Navbar.Group>
            <Navbar.Heading>To Do List: {props.incomplete} items pending</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
    </Navbar>
    )
}
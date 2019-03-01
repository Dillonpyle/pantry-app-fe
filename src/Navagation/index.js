import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './navagation.css'

export class index extends Component {
    render() {
        return (<div id='navbar'>

            <Link to={'/Home'}><NavLink id='homeLink'>home</NavLink> </Link>
            <Link to={'/'}><NavLink id="logout">logout</NavLink></Link>

        </div>
        )
    }
}

export default withRouter(index)

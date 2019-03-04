import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './navagation.css'

export class index extends Component {
    render() {
        return (




            <div id='navbar'>

                <Link to={'/Home'} id='homeLink'>Home </Link>
                <Link to={'/'} id="logout">Logout</Link>

            </div>
        )
    }
}

export default withRouter(index)

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import './navagation.css'

export class Navagation extends Component {
    render() {
        return (
            <div id='navbar'>
                <Link to={'/Home'} id='homeLink'>Home </Link>
                <Link to={'/'} id="logout">Logout</Link>
            </div>
        )
    }
}

export default withRouter(Navagation)

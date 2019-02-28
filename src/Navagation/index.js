import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

export class index extends Component {
    render() {
        return (
            <nav>
                <Link to={'/Home'}><button>home</button> </Link>
                <Link to={'/'}><button>logout</button> </Link>
            </nav>
        )
    }
}

export default withRouter(index)

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import img from './pantry1.jpeg'
import './home.css'



const index = ({ username }) => {
    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>{username}'s Pantry</h1>
            <div id='homePageButtons'>
                <Link to={'/ingredients'}><Button outline color="primary">Ingredients</Button> </Link>
                <Button outline color="primary"><Link to={'/recipes'}> Recipe </Link></Button>
                <Button outline color="primary">Add Recipe</Button>
            </div>
            <img id='homeImg' src={img} />
        </div>
    )
}

export default withRouter(index)

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';


const index = ({ username }) => {
    return (
        <div>
            <h1 id='homeHeader'>{username}'s Pantry</h1>
            <div>
                <Link to={'/ingredients'}><button>Ingredients</button> </Link>
                <Link to={'/recipes'}> <button>Recipe</button> </Link>
                <button>Add Recipe</button>
            </div>
        </div>
    )
}

export default withRouter(index)

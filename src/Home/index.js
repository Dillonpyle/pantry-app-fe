import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import IngredientsIndex from '../IngredientsIndex';
import './home.css'


// Links to other pages and displays ingredients index
const index = ({ username, ing_list, deleteIngredient}) => {

    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>{username}'s Pantry</h1>
            <div id='homePageButtons'>
                <Link to={'/ingredients'}><button >Ingredients</button></Link>
                <Link to={'/recipes'}>  <button > Recipe</button> </Link>
                <button >Add Recipe</button>
            </div>
            <IngredientsIndex ing_list={ing_list} deleteIngredient={deleteIngredient}/>
        </div>
    )
}

export default withRouter(index)

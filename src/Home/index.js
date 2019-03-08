import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import IngredientsIndex from '../ingredients/IngredientsIndex';
import './home.css'


// Links to other pages and displays ingredients index
const index = ({ username, ing_list, deleteIngredient, user_id }) => {

    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>{username}'s Pantry</h1>
            <div id='homePageButtons'>
                <Link to={'/ingredients'}><button className='homeButtons'>Ingredients</button></Link>
                <Link to={'/recipes'}>  <button className='homeButtons' >Search Recipes</button> </Link>
            </div>
            <IngredientsIndex ing_list={ing_list} deleteIngredient={deleteIngredient} user_id={user_id} />
        </div >
    )
}

export default withRouter(index)

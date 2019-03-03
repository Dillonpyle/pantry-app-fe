import React from 'react';
import RecipeAdd from '../RecipeAdd'

const Form = props => (
    <React.Fragment>
        <h2>Search for a recipe online!</h2>
        <form onSubmit={props.getRecipe} >
            <input type="text" name="recipeName" placeholder="Search..." />
            <button>search</button>
        </form>
        <div>
            {props.recipes.map((recipe, i) => {
                return (<div key={i} >
                    <div >
                        <img src={recipe.image_url} alt={recipe.title} />
                        <p>{recipe.title}</p>
                        <a href={recipe.source_url} target="_blank">source link</a>
                    </div >
                </div>)
            })}
        </div>
        <RecipeAdd />
    </React.Fragment>
)



export default Form
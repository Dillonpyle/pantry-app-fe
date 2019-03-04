import React from 'react';
import RecipeAdd from '../RecipeAdd'
import './recipe.css'


const Form = props => (
    <React.Fragment>
        <div className="main-container">
            <RecipeAdd user={props}/>
            <h3>Search for a recipe online!</h3>
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
        </div>
        
    </React.Fragment>
)



export default Form
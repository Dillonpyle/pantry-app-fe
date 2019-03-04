import React from 'react';
import RecipeAdd from '../RecipeAdd'
import RecipeSearch from '../RecipeSearch'


const Form = props => (
    <React.Fragment>
        <RecipeAdd user={props}/><br/>
        <h2>Search user created Recipes</h2>
        <RecipeSearch user={props.user}/>
        <h2>Or Search for a recipe online!</h2>
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
        
    </React.Fragment>
)



export default Form
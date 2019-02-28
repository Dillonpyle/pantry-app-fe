import React from 'react'

const Form = props => (
    <React.Fragment>
        <form onSubmit={props.getRecipe} >
            <input type="text" name="recipeName" />
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
import React from 'react'
import './IngredientsResults.css'

const IngredientsResults = (props) => {
	console.log(props);
	return (
		<div id="ingredientsResults">
			<div className="left">
				{props.results.ing_name}: {props.results.ing_type}
			</div>
			<button className="right" onClick={props.addIngredient.bind(null, props.results.ing_id)}>
				Add To Your Pantry
			</button>



		</div>
	)
}

export default IngredientsResults



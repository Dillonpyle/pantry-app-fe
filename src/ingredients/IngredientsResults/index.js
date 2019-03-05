import React from 'react'
import './IngredientsResults.css'

const IngredientsResults = ({ results, addIngredient }) => {
	return (
		<div id="ingredientsResults">
			<div className="left">
				{results.ing_name}: {results.ing_type}
			</div>
			<button className="right" onClick={addIngredient.bind(null, results.ing_id)}>
				Add To Your Pantry
			</button>



		</div>
	)
}

export default IngredientsResults



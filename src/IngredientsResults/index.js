import React from 'react'

const IngredientsResults = (props) => {
	console.log(props);
	return (
		<div>
			<div className="left">
				{props.results.ing_name}: {props.results.ing_type}
			</div>
			<button className="right" onClick={props.addIngredient.bind(null, props.results.ing_id)}>
				Add
			</button>



		</div>
	)
}

export default IngredientsResults



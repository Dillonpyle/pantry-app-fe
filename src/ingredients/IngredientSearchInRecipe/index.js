import React, { Component } from 'react'

class IngredientSearchInRecipe extends Component {

	state = {
		search: ''
	}


	render() {
		return (
			<div>
				<h3>Add ingredients to your recipe</h3>
				<h4>Can't find your ingredient?  Add it to our database from the ingredients page</h4>
				<form onSubmit={this.props.searchIngredients.bind(null)}>
					<input name="ingredients_search" placeholder="Ingredient..." value={this.props.ingredients_search} onChange={this.props.handleChange} />
					<button>Search Ingredients</button>
				</form>
			</div>
		)
	}
}

export default IngredientSearchInRecipe
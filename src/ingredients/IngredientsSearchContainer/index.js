import React, { Component } from 'react';
import IngredientAdd from '../IngredientAdd';
import './IngredientsSearchContainer.css'

class IngredientsSearchContainer extends Component {


	state = {
		ing_id: '',
		ing_name: '',
		ing_type: ''
	}



	searchIngredients = async (query, e) => {
		console.log(`search Ingredients being called with query:${query} and e:`);

		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/ingredients/search`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({ search: query })
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			this.setState({
				ing_id: parsedResponse.id,
				ing_name: parsedResponse.name,
				ing_type: parsedResponse.typeof,
			})

		} catch (err) {
			console.log(err)
		}
	}

	addIngredient = async (ing_id) => {

		console.log(this.props.user_id);
		console.log(`addIngredient was called ing_id is ${ing_id}, e is , user_id is ${this.props.user_id}`);
		try {
			console.log(ing_id);

			const response = await fetch(`${process.env.REACT_APP_API_URL}/pantry_items`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				// body: JSON.stringify({ingredient_id: 1})
				body: JSON.stringify({
					ingredient_id: ing_id,
					user_id: this.props.user_id
				})
			})


			if (!response.ok) {
				throw Error(response.statusText)
			}
			this.props.listIngredients()
			const parsedResponse = await response.json()
			console.log(parsedResponse);

		} catch (err) {
			console.log(err)
		}
	}






	render() {

		return (
			<div>
				<h1 id='searchContainerHeader'>Add to Your Pantry</h1>
				<IngredientAdd addIngredient={this.addIngredient} searchIngredients={this.searchIngredients} handleChange={this.handleChange} />
			</div>


		)
	}
}

export default IngredientsSearchContainer
import React, { Component } from 'react'
import IngredientsSearch from '../IngredientsSearch'
import IngredientsResults from '../IngredientsResults'
import IngredientAdd from '../IngredientAdd'

class IngredientsSearchContainer extends Component {
	constructor() {
		super()

		this.state = {
			ing_id: '',
			ing_name: '',
			ing_type: '',
		}
	}

	searchIngredients = async (query, e) => {
		e.preventDefault()
		console.log(`search Ingredients being called with query:${query} and e:${e}`);

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

	addIngredient = async (ing_id, e) => {
		e.preventDefault()
		console.log(this.props.user_id);
		console.log(`addIngredient was called ing_id is ${ing_id}, e is ${e}, user_id is ${this.props.user_id}`);
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

			const parsedResponse = await response.json()
			console.log(parsedResponse);

		} catch (err) {
			console.log(err)
		}
	 }


	render() {
		console.log(this.props, 'this is props on ing search container');
		return (
			<div>
				<h1>ingredients search container</h1>
				<IngredientsSearch searchIngredients={this.searchIngredients} />
				{this.state.ing_name ? <IngredientsResults results={this.state} addIngredient={this.addIngredient} /> : null}
				<IngredientAdd />
			</div>


		)
	}
}

export default IngredientsSearchContainer
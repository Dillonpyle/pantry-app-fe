import React, { Component } from 'react';

import './IngredientAdd.css';

class IngredientAdd extends Component {

	state = {
		name: '',
		typeof: '',
		query: '',
		ing_id: ''
	}

	// Adds ingredient to database, not to pantry
	addIngredientToIngredientDb = async (e) => {
		e.preventDefault()
		console.log('hitting addIngredinetToIngredientDb')
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/ingredients`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify(this.state)
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse.id)

			console.log(parsedResponse, 'this is the parsed response from addIngredientToIngredientDb')
			this.setState({
				ing_id: parsedResponse.id
			})
			console.log(this.state.ing_id, "this is state.ing_id from addIngredientToIngredientDb")
			this.props.addIngredient(this.state.ing_id)
		} catch (err) {
			console.log(err)
		}
	}


	handleSubmit = (e) => {
		e.preventDefault()
		console.log('handle submit was called');
		this.props.searchIngredients(this.state.search, e)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div id="IngredientAddContainer">
				<form onSubmit={this.addIngredientToIngredientDb}>
					<input name="name" placeholder="Ingredient name..." value={this.state.name} onChange={this.handleChange} />
					<input name="typeof" placeholder="Ingredient type..." value={this.state.type} onChange={this.handleChange} />
					<button onClick={this.props.addIngredient.bind(null, this.state.ing_id)}>Add new Ingredient</button>
				</form>
			</div>
		)
	}
}

export default IngredientAdd
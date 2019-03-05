import React, { Component } from 'react'
import './IngredientAdd.css'

class IngredientAdd extends Component {

	state = {
		name: '',
		typeof: ''
	}

	// Adds ingredient to database, not to pantry
	addIngredient = async (e) => {
		e.preventDefault()
		console.log('hitting addIngredinet')
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
			console.log(parsedResponse)

		} catch (err) {
			console.log(err)
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div id="IngredientAddContainer">
				<h2>Add a new ingredient to our database</h2>
				<form onSubmit={this.addIngredient}>
					<input name="name" placeholder="Ingredient name..." value={this.state.name} onChange={this.handleChange} />
					<input name="typeof" placeholder="Ingredient type..." value={this.state.type} onChange={this.handleChange} />
					<button>Add new Ingredient</button>
				</form>
			</div>
		)
	}
}

export default IngredientAdd
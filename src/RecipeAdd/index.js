import React, { Component } from 'react'
import AddIngredientToRecipe from '../AddIngredientToRecipe'
import IngredientSearchInRecipe from '../IngredientSearchInRecipe'
import RecipeSearch from '../RecipeSearch'
import './recipeAdd.css'
import '../App.css'


class RecipeAdd extends Component {

	state = {
		title: '',
		description: '',
		image_url: '',
		ingredients_search: '',
		ing_id: '',
		ing_name: '',
		ing_type: '',
		recipe_id: '',
		message: ''
	}


	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	createRecipe = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({
					title: this.state.title,
					description: this.state.description,
					image_url: this.state.image_url,
					created_by: this.props.user.user.user_id

				})
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()

			if (parsedResponse) {
				this.setState({
					recipe_id: parsedResponse.id,
					message: `${parsedResponse.title} Added!`
				})
			}

		} catch (err) {
			console.log(err)
		}
	}

	searchIngredients = async (e) => {
		e.preventDefault()

		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/ingredients/search`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({ search: this.state.ingredients_search })
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()

			this.setState({
				ing_id: parsedResponse.id,
				ing_name: parsedResponse.name,
				ing_type: parsedResponse.typeof,
			})

		} catch (err) {
			console.log(err)
		}
	}

	// adding ingredients to created recipe
	// just called add ingredients because reused component from ingredients component
	addIngredient = async (amt, unit, e) => {
		e.preventDefault()
		// console.log(`add ingredient was called.  This is amount ${amt}. This is unit ${unit}`);
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/recipe_ingredient/${this.state.recipe_id}/${this.state.ing_id}`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({
					amount: amt,
					unit: unit
				})
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			if (parsedResponse) {
				this.setState({
					message: 'Ingredient Added'
				})
			}

		} catch (err) {
			console.log(err)
		}
	}

	se

	render() {
		return (
			<div className="center">
				<h2>Add your own Recipe!</h2>
				<form onSubmit={this.createRecipe} id="create-recipe" className="center">
					<div>
						<input name="title" placeholder="Recipe title..." value={this.state.title} onChange={this.handleChange} />
						<input name="image_url" placeholder="Recipe image_url..." value={this.state.image_url} onChange={this.handleChange} />
					</div>
					<textarea form="create-recipe" name="description" placeholder="Recipe description..." value={this.state.description} onChange={this.handleChange}></textarea>
					<button type="submit">Create Recipe</button>
				</form>
				{this.state.message ? <h4>{this.state.message}</h4> : null}
				{this.state.recipe_id ? <IngredientSearchInRecipe searchIngredients={this.searchIngredients} ingredients_search={this.state.ingredients_search} handleChange={this.handleChange} /> : null}
				{this.state.ing_name ? <AddIngredientToRecipe results={this.state} addIngredient={this.addIngredient} /> : null}
				<RecipeSearch />

			</div>

		)
	}
}

export default RecipeAdd


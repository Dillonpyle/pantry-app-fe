import React, { Component } from 'react'
import IngredientsResults from '../IngredientsResults'
import AddIngredientToRecipe from '../AddIngredientToRecipe'
import IngredientSearchInRecipe from '../IngredientSearchInRecipe'

class RecipeAdd extends Component{
	constructor () {
		super()

		this.state = {
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
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	createRecipe =  async (e) => {
		e.preventDefault()
		console.log('create Recipe was called');
		console.log(this.state, "= state when createRecipe is called");
		console.log(this.props.user.user.user_id, "= id of user creating recipe");
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
			console.log(parsedResponse)

			if(parsedResponse) {
				this.setState({
					recipe_id: parsedResponse.id,
					message: `${parsedResponse.title} Added!`
				})
			}

			console.log(this.state);


		} catch (err) {
			console.log(err)
		}
	}

	searchIngredients = async (e) => {
		e.preventDefault()
		console.log(`search Ingredients being called with query:${this.state.ingredients_search} and e:${e}`);

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
			console.log(parsedResponse);

			this.setState({
				ing_id: parsedResponse.id,
				ing_name: parsedResponse.name,
				ing_type: parsedResponse.typeof,
			})
			console.log(this.state);

		} catch (err) {
			console.log(err)
		}
	}

	// adding ingredients to created recipe
	// just called add ingredients because reused component from ingredients component
	addIngredient = async (amt, unit, e) => {
		e.preventDefault()
		console.log(`add ingredient was called.  This is amount ${amt}. This is unit ${unit}`);
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
					message: "Ingredient Added!"
				})
			}

		} catch (err) {
			console.log(err)
		}


	}

	render () {
		// console.log(this.props);
		return(
			<div>
				<h2>Add your own Recipe!</h2>
				<form onSubmit={this.createRecipe} id="create-recipe">
					<input name="title" placeholder="Recipe title..." value={this.state.title} onChange={this.handleChange}/>
					<input name="image_url" placeholder="Recipe image_url..." value={this.state.image_url} onChange={this.handleChange}/>
					<button type="submit">Create Recipe</button>
				</form>
				<textarea form="create-recipe" name="description" placeholder="Recipe description..." value={this.state.description} onChange={this.handleChange}></textarea>
				{this.state.message ? <h4>{this.state.message}</h4> : null}

				{this.state.recipe_id ? <IngredientSearchInRecipe handleChange={this.handleChange} searchIngredients={this.searchIngredients} ingredients_search={this.state.ingredients_search}/> : null}


				{this.state.ing_name ? <AddIngredientToRecipe results={this.state} addIngredient={this.addIngredient}/> : null}
			</div>

		)
	}
}

export default RecipeAdd


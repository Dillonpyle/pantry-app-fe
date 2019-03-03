import React, { Component } from 'react'

class RecipeAdd extends Component{
	constructor () {
		super()

		this.state = {
			title: '',
			description: '',
			image_url: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	createRecipe = (e) => {
		e.preventDefault()
		console.log('create Recipe was called');
	}

	render () {
		return(
			<div>
				<h2>Add your own Recipe!</h2>
				<form onSubmit={this.createRecipe}>
					<input name="title" placeholder="Recipe title..." value={this.state.title} onChange={this.handleChange}/>
					<input name="description" placeholder="Recipe description..." value={this.state.description} onChange={this.handleChange}/>
					<input name="image_url" placeholder="Recipe image_url..." value={this.state.image_url} onChange={this.handleChange}/>
					<button type="submit">Create Recipe</button>
				</form>
			</div>

		)
	}
}

export default RecipeAdd


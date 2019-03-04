import React, { Component } from 'react'
import RecipeSearchResults from '../RecipeSearchResults'


class RecipeSearch extends Component {
	constructor () {
		super()

		this.state = {
			query: '',
			results: [],
			showResults: false,
			recipe_id: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	searchRecipes = async (e) => {
		e.preventDefault()
		console.log('searchRecipes was called');

		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/recipe/search`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					credentials: "include",
					body: JSON.stringify({
						query: this.state.query
					})
			})

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			if (parsedResponse) {
				this.setState ({
					showResults: true,
					results: [...parsedResponse]
				})
			}

		} catch (err) {
			console.log(err)
		}

	}





	render () {
		return (
			<div>
				<h3>Search user created recipe</h3>
				<form onSubmit={this.searchRecipes}>
					<input name="query" placeholder="Search..." value={this.state.query} onChange={this.handleChange}/>
					<button type="search">Search</button>
				</form>
				{this.state.showResults ? <RecipeSearchResults results={this.state.results}/> : null}
			</div>

		)
	}
}

export default RecipeSearch
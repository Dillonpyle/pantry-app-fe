import React, { Component } from 'react'
import IngredientsSearch from '../IngredientsSearch'
import IngredientsResults from '../IngredientsResults'


class IngredientsSearchContainer extends Component {
	constructor () {
		super()

		this.state ={
			user: '',
			userId: '',
		}
	}

	searchIngredients = async (query, e) => {
		e.preventDefault()
		console.log(`search Ingredients being called with query:${query} and e:${e}`);
		try {
			const response = await fetch ('http://localhost:8000/api/v1/ingredients/search', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({search: query})
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);
		} catch (err) {
			console.log(err)
		}
	}


	render() {
		return (
			<div>
				<h1>ingredients search container</h1>
				<IngredientsSearch searchIngredients={this.searchIngredients} />
				<IngredientsResults results={null}/>
			</div>


		)
	}
}

export default IngredientsSearchContainer
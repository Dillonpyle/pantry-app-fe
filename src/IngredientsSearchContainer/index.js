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
		try {
			const response = await fetch ('http://localhost:8000/api/v1/ingredients', {
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
	// searchArtist = async (query, e) => {
	// 	e.preventDefault()

	// 	try {
	// 		const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist`, {
	// 			method: 'POST',
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			credentials: 'include',
	// 			



	render() {
		return (
			<div>
				<h1>ingredients search container</h1>
				<IngredientsSearch />
				<IngredientsResults results={null}/>
			</div>


		)
	}
}

export default IngredientsSearchContainer
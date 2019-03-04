import React, { Component } from 'react'

class RecipeShow extends Component {
	constructor () {
		super ()

		this.state = {
			stuff: ''
		}
	}

	render () {
		console.log(this.props);
		return (
			<div>
				hi
			</div>
		)
	}
}

export default RecipeShow
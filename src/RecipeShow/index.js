import React, { Component } from 'react'
import '../App.css';

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
			<div className="center">
				hi
			</div>
		)
	}
}

export default RecipeShow